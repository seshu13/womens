'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import Image from 'next/image';
import { toast } from 'react-hot-toast';
import { Database } from '@/types/supabase';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Add this function to get the full Supabase storage URL
const getSupabaseStorageUrl = (bucket: string, path: string) => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  return `${supabaseUrl}/storage/v1/object/public/${bucket}/${path}`;
};

interface ActivityFormData {
  title: string;
  description: string;
  category: 'leadership' | 'team-building' | 'virtual' | 'experiences' | 'speaker';
  badge?: string;
  image?: File;
}

interface Activity {
  id: string;
  title: string;
  description: string;
  image_url: string;
  category: 'leadership' | 'team-building' | 'virtual' | 'experiences' | 'speaker';
  badge?: string;
  is_active: boolean;
  created_at: string;
}

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [editingActivity, setEditingActivity] = useState<Activity | null>(null);

  // Fetch activities on component mount
  useEffect(() => {
    if (isLoggedIn) {
      fetchActivities();
    }
  }, [isLoggedIn]);

  const fetchActivities = async () => {
    try {
      const { data, error } = await supabase
        .from('activities')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setActivities(data || []);
    } catch (error) {
      console.error('Error fetching activities:', error);
      toast.error('Failed to load activities');
    }
  };

  const handleDeleteActivity = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this activity?')) return;

    try {
      const activity = activities.find(a => a.id === id);
      if (!activity) return;

      // Delete image from storage if exists
      if (activity.image_url) {
        const imagePath = activity.image_url.split('/').pop();
        if (imagePath) {
          const { error: storageError } = await supabase.storage
            .from('activity-images')
            .remove([imagePath]);

          if (storageError) throw storageError;
        }
      }

      // Delete from database
      const { error } = await supabase
        .from('activities')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast.success('Activity deleted successfully');
      fetchActivities();
    } catch (error) {
      console.error('Error deleting activity:', error);
      toast.error('Failed to delete activity');
    }
  };

  const handleToggleActive = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('activities')
        .update({ is_active: !currentStatus })
        .eq('id', id);

      if (error) throw error;

      toast.success('Activity status updated');
      fetchActivities();
    } catch (error) {
      console.error('Error updating activity status:', error);
      toast.error('Failed to update activity status');
    }
  };

  // Simple authentication - in real world, use proper auth
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const username = (form.elements.namedItem('username') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;

    // Simple hardcoded auth - Replace with proper auth in production
    if (username === 'admin' && password === 'trebound123') {
      setIsLoggedIn(true);
      toast.success('Logged in successfully!');
    } else {
      toast.error('Invalid credentials!');
    }
  };

  const handleAddActivity = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      const imageFile = formData.get('image') as File;

      // Upload image to Supabase Storage
      let imageUrl = editingActivity?.image_url || '';
      if (imageFile.size > 0) {
        // Validate file size (max 2MB)
        if (imageFile.size > 2 * 1024 * 1024) {
          throw new Error('Image size should be less than 2MB');
        }

        // Validate file type
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
        if (!allowedTypes.includes(imageFile.type)) {
          throw new Error('Only JPG, PNG, GIF and WEBP images are allowed');
        }

        const fileExt = imageFile.name.split('.').pop();
        // Ensure clean filename
        const fileName = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}.${fileExt}`;

        console.log('Attempting to upload file:', {
          fileName,
          fileSize: imageFile.size,
          fileType: imageFile.type,
          bucketName: 'activity-images'
        });
        
        try {
          // If editing and new image uploaded, delete old image
          if (editingActivity?.image_url) {
            const oldImagePath = editingActivity.image_url.split('/').pop();
            if (oldImagePath) {
              await supabase.storage
                .from('activity-images')
                .remove([oldImagePath]);
            }
          }

          const { data: uploadData, error: uploadError } = await supabase.storage
            .from('activity-images')
            .upload(fileName, imageFile, {
              cacheControl: '3600',
              contentType: imageFile.type,
              upsert: false
            });

          if (uploadError) {
            console.error('Image upload error details:', {
              message: uploadError.message,
              name: uploadError.name
            });
            
            // Handle specific error cases
            if (uploadError.message.includes('duplicate')) {
              throw new Error('A file with this name already exists');
            } else if (uploadError.message.includes('permission')) {
              throw new Error('Storage bucket permissions not set up correctly');
            } else {
              throw new Error(`Failed to upload image: ${uploadError.message}`);
            }
          }

          if (!uploadData?.path) {
            throw new Error('No upload path returned from storage');
          }

          // Get public URL for the uploaded file
          const { data: { publicUrl } } = supabase.storage
            .from('activity-images')
            .getPublicUrl(uploadData.path);

          imageUrl = publicUrl;
          console.log('Successfully uploaded image:', {
            path: uploadData.path,
            publicUrl: imageUrl
          });
        } catch (error) {
          console.error('Detailed upload error:', error);
          throw error;
        }
      }

      const activityData = {
        title: formData.get('title'),
        description: formData.get('description'),
        category: formData.get('category'),
        badge: formData.get('badge') || null,
        image_url: imageUrl,
        is_active: true
      };

      let error;
      if (editingActivity) {
        // Update existing activity
        ({ error } = await supabase
          .from('activities')
          .update(activityData)
          .eq('id', editingActivity.id));
      } else {
        // Add new activity
        ({ error } = await supabase
          .from('activities')
          .insert(activityData));
      }

      if (error) {
        console.error('Database operation error:', error);
        throw new Error(`Failed to ${editingActivity ? 'update' : 'save'} activity data: ${error.message}`);
      }

      toast.success(`Activity ${editingActivity ? 'updated' : 'added'} successfully!`);
      setShowAddModal(false);
      setEditingActivity(null);
      form.reset();
      fetchActivities();
    } catch (error) {
      console.error('Error handling activity:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to handle activity');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#FDF8F7] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 shadow-xl max-w-md w-full">
          <h1 className="text-2xl font-bold text-[#053257] mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-[#053257] mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                required
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4C39]/20 focus:border-[#FF4C39]"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#053257] mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4C39]/20 focus:border-[#FF4C39]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#FF4C39] text-white py-2 rounded-xl hover:bg-[#FF4C39]/90 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDF8F7] p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-[#053257]">Activity Management</h1>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-[#FF4C39] text-white px-4 py-2 rounded-xl hover:bg-[#FF4C39]/90 transition-colors"
          >
            Add New Activity
          </button>
        </div>

        {/* Activities List */}
        <div className="grid gap-6">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-6">
                {/* Image */}
                <div className="relative w-40 h-40 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={activity.image_url}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[#053257] mb-2">
                        {activity.title}
                      </h3>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-[#FFB47333] text-[#FF4C39] rounded-full text-sm">
                          {activity.category}
                        </span>
                        {activity.badge && (
                          <span className="px-3 py-1 bg-[#FF4C39] text-white rounded-full text-sm">
                            {activity.badge}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleToggleActive(activity.id, activity.is_active)}
                        className={`p-2 rounded-lg transition-colors ${
                          activity.is_active
                            ? 'bg-green-100 text-green-600'
                            : 'bg-gray-100 text-gray-600'
                        }`}
                        title={activity.is_active ? 'Deactivate' : 'Activate'}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={activity.is_active
                              ? "M5 13l4 4L19 7"
                              : "M6 18L18 6M6 6l12 12"
                            }
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => setEditingActivity(activity)}
                        className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                        title="Edit"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleDeleteActivity(activity.id)}
                        className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                        title="Delete"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="text-[#053257CC] line-clamp-2">{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add/Edit Activity Modal */}
        {(showAddModal || editingActivity) && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-[#053257]">
                  {editingActivity ? 'Edit Activity' : 'Add New Activity'}
                </h2>
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    setEditingActivity(null);
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleAddActivity} className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-[#053257] mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    value={editingActivity?.title || ''}
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4C39]/20 focus:border-[#FF4C39]"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-[#053257] mb-1">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={4}
                    value={editingActivity?.description || ''}
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4C39]/20 focus:border-[#FF4C39]"
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-[#053257] mb-1">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={editingActivity?.category || ''}
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4C39]/20 focus:border-[#FF4C39]"
                  >
                    <option value="leadership">Leadership</option>
                    <option value="team-building">Team Building</option>
                    <option value="virtual">Virtual</option>
                    <option value="experiences">Experiences</option>
                    <option value="speaker">Speaker</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="badge" className="block text-sm font-medium text-[#053257] mb-1">
                    Badge (Optional)
                  </label>
                  <input
                    type="text"
                    id="badge"
                    name="badge"
                    value={editingActivity?.badge || ''}
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4C39]/20 focus:border-[#FF4C39]"
                  />
                </div>

                <div>
                  <label htmlFor="image" className="block text-sm font-medium text-[#053257] mb-1">
                    Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4C39]/20 focus:border-[#FF4C39]"
                  />
                </div>

                <div className="flex justify-end gap-4 mt-6">
                  <button
                    type="button"
                    onClick={() => {
                      setShowAddModal(false);
                      setEditingActivity(null);
                    }}
                    className="px-4 py-2 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
                    disabled={isLoading}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-[#FF4C39] text-white px-4 py-2 rounded-xl hover:bg-[#FF4C39]/90 transition-colors disabled:opacity-50 flex items-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Adding...
                      </>
                    ) : (
                      'Add Activity'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 