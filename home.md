<template>
  <main class="bg-secondary-light font-sans">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-primary-light/10 via-secondary-light to-primary-light/20">
      <!-- Decorative elements -->
      <div class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-primary-light/10 shadow-xl shadow-primary/10 ring-1 ring-primary-light/20"></div>

      <div class="container mx-auto px-4 py-16 lg:py-24 relative">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left content -->
          <div class="text-left z-10 space-y-6">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light/20 text-primary backdrop-blur-sm">
              <span class="animate-bounce">🎨</span>
              <span class="text-sm font-medium">Women's Day Special</span>
            </div>
            
            <h1 class="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-secondary leading-tight">
              Swing, Sip & 
              <span class="block text-primary mt-2">Strengthen Bonds</span>
              <span class="block text-2xl lg:text-3xl text-secondary/80 mt-4 font-medium">Celebrate Women's Day in Style!</span>
            </h1>

            <p class="text-lg text-secondary/70 max-w-xl">
              Unleash creativity, build confidence, and have fun with our special Women's Day corporate team-building activities!
            </p>

            <div class="flex flex-wrap gap-4">
              <div class="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-secondary shadow-sm ring-1 ring-primary-light/20">
                <span class="mr-2">✨</span>
                Unique Experiences
              </div>
              <div class="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-secondary shadow-sm ring-1 ring-primary-light/20">
                <span class="mr-2">🎯</span>
                Fun & Engaging
              </div>
              <div class="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-secondary shadow-sm ring-1 ring-primary-light/20">
                <span class="mr-2">👥</span>
                Perfect for Corporate Teams
              </div>
            </div>

            <div class="pt-4">
              <a 
                href="#reserve" 
                class="inline-flex items-center px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-0.5 transform"
              >
                Reserve Your Spot
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <!-- Right image -->
          <div class="relative z-10">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 ring-1 ring-primary-light/20">
              <img 
                src="https://images.unsplash.com/photo-1577490727009-58e3b41b302e?auto=format&fit=crop&q=80"
                alt="Women's Day Team Building Activities"
                class="w-full object-cover aspect-[4/3]"
                width="800"
                height="600"
                loading="eager"
              />
              <!-- Overlay gradient -->
              <div class="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Instructions Section -->
    <section class="py-12 bg-gradient-to-br from-primary-light/5 to-secondary-light">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-primary/5">
            <h2 class="font-display text-2xl md:text-3xl font-bold text-secondary mb-6 text-center">How to Create Your Proposal</h2>
            
            <div class="grid md:grid-cols-3 gap-6">
              <div class="text-center space-y-3">
                <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary text-xl font-bold">1</div>
                <h3 class="font-display font-bold text-secondary">Select Activities</h3>
                <p class="text-secondary/70 text-sm">Choose the activities that interest your team by clicking on the cards below</p>
              </div>
              
              <div class="text-center space-y-3">
                <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary text-xl font-bold">2</div>
                <h3 class="font-display font-bold text-secondary">Review Selection</h3>
                <p class="text-secondary/70 text-sm">Click the floating button to review your selected activities</p>
              </div>
              
              <div class="text-center space-y-3">
                <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary text-xl font-bold">3</div>
                <h3 class="font-display font-bold text-secondary">Submit Details</h3>
                <p class="text-secondary/70 text-sm">Fill in your contact information and we'll get back to you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Activities Section -->
    <section id="featured-activities" class="py-16 lg:py-20 bg-secondary-light">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="font-display text-3xl lg:text-4xl font-bold text-secondary mb-3">Featured Activities – Choose Your Perfect Experience!</h2>
          <p class="text-lg text-secondary/70 font-display">Give your team the gift of experiences that matter!</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Activity Card Template -->
          <template v-for="activity in activities" :key="activity.id">
            <div 
              class="group bg-white rounded-xl overflow-hidden transition-all duration-500 relative cursor-pointer flex flex-col"
              :class="{
                'ring-1 ring-primary shadow-xl translate-y-[-1px]': selectedActivities.includes(activity.id),
                'hover:shadow-lg hover:-translate-y-1': !selectedActivities.includes(activity.id)
              }"
              @click="toggleActivity(activity.id)"
            >
              <!-- Selection Tag -->
              <div 
                class="absolute top-3 right-3 z-30 transition-all duration-300"
                :class="[
                  selectedActivities.includes(activity.id)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-4'
                ]"
              >
                <div class="bg-primary text-white text-xs font-medium rounded-lg py-1 px-2.5 shadow-lg">
                  Selected
                </div>
              </div>

              <!-- Image Container -->
              <div class="relative aspect-[2/1] w-full">
                <img 
                  :src="activity.image"
                  :alt="activity.title"
                  class="w-full h-full object-cover transform transition-all duration-700"
                  :class="[
                    selectedActivities.includes(activity.id)
                      ? 'scale-105 brightness-105'
                      : 'group-hover:scale-105 group-hover:brightness-102'
                  ]"
                  width="400"
                  height="200"
                />
                <!-- Overlay -->
                <div 
                  class="absolute inset-0 transition-all duration-500"
                  :class="[
                    selectedActivities.includes(activity.id)
                      ? 'bg-gradient-to-t from-primary/30 via-primary/5 to-transparent'
                      : 'bg-gradient-to-t from-secondary/20 to-transparent group-hover:from-primary/10'
                  ]"
                ></div>
              </div>

              <!-- Content -->
              <div class="p-4 flex flex-col min-h-[180px]">
                <!-- Title and Badge -->
                <div class="flex items-start justify-between gap-2 mb-2">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <svg v-if="activity.id === 'art-workshop'" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                        <path d="M2 2l7.586 7.586"></path>
                        <circle cx="11" cy="11" r="2"></circle>
                      </svg>
                      <svg v-if="activity.id === 'golf-training'" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2v7.5"></path>
                        <path d="M12 14.5V20"></path>
                        <path d="M16 12H8"></path>
                      </svg>
                      <svg v-if="activity.id === 'lipstick-making'" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2v8"></path>
                        <path d="M8 14h8"></path>
                        <path d="M16 14l-4 8-4-8"></path>
                        <path d="M8 10h8"></path>
                      </svg>
                      <svg v-if="activity.id === 'wine-tour'" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M8 22h8"></path>
                        <path d="M7 10h10"></path>
                        <path d="M12 15v7"></path>
                        <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"></path>
                      </svg>
                      <svg v-if="activity.id === 'wellness'" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"></path>
                      </svg>
                      <svg v-if="activity.id === 'self-defense'" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                      </svg>
                      <svg v-if="activity.id === 'bike-riding'" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="5.5" cy="17.5" r="3.5"></circle>
                        <circle cx="18.5" cy="17.5" r="3.5"></circle>
                        <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2"></path>
                      </svg>
                    </div>
                    <h3 class="text-lg font-display font-bold text-secondary transition-colors duration-300 leading-tight">
                      {{ activity.title }}
                    </h3>
                  </div>
                  <span 
                    v-if="activity.badge" 
                    class="text-[11px] font-medium px-2 py-0.5 rounded-full transition-colors duration-300 whitespace-nowrap flex-shrink-0"
                    :class="[
                      selectedActivities.includes(activity.id)
                        ? 'bg-primary text-white'
                        : 'text-primary bg-primary-light/20'
                    ]"
                  >
                    {{ activity.badge }}
                  </span>
                </div>

                <!-- Description -->
                <p 
                  class="text-secondary/70 text-sm leading-relaxed transition-colors duration-300 flex-grow"
                  :class="{
                    'text-secondary/80': selectedActivities.includes(activity.id)
                  }"
                >
                  {{ activity.description }}
                </p>

                <!-- Selection Indicator -->
                <div class="flex items-center gap-2 mt-2 pt-2 border-t border-secondary/5">
                  <div 
                    class="w-3.5 h-3.5 rounded-full border transition-all duration-300 flex items-center justify-center"
                    :class="[
                      selectedActivities.includes(activity.id)
                        ? 'border-primary bg-primary border-2'
                        : 'border-secondary/20'
                    ]"
                  >
                    <svg 
                      v-if="selectedActivities.includes(activity.id)"
                      xmlns="http://www.w3.org/2000/svg" 
                      class="h-2 w-2 text-white" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-xs text-secondary/60">
                    {{ selectedActivities.includes(activity.id) ? 'Selected' : 'Select this activity' }}
                  </span>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>

    <!-- Floating Action Button -->
    <FloatingActionButton
      :show="hasSelectedActivities"
      :count="selectedActivities.length"
      @click="openProposalModal"
    />

    <!-- Proposal Modal -->
    <ProposalModal
      :show="showProposalModal"
      :selected-activities="selectedActivities"
      @close="closeProposalModal"
      @submit="submitProposal"
    />

    <!-- Why Choose Section -->
    <section class="py-16 lg:py-20 bg-gradient-to-br from-primary-light/5 via-white to-secondary-light">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-8">
            <h2 class="font-display text-3xl lg:text-4xl font-bold text-secondary mb-4">Why Celebrate Women's Day with Trebound?</h2>
            <p class="text-lg text-secondary/70 max-w-2xl mx-auto">
              Women are the heart of every organization. This Women's Day, go beyond just celebrations—invest in meaningful experiences that foster creativity, empowerment, and teamwork.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <!-- Team Bonds Card -->
            <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-display text-lg font-bold text-secondary mb-2">Strengthen Team Bonds</h3>
                  <p class="text-secondary/70 text-sm leading-relaxed">Build stronger connections and foster collaboration through shared experiences and meaningful interactions.</p>
                </div>
              </div>
            </div>

            <!-- Confidence Card -->
            <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-display text-lg font-bold text-secondary mb-2">Boost Confidence & Well-being</h3>
                  <p class="text-secondary/70 text-sm leading-relaxed">Empower your team with activities that enhance personal growth and promote mental well-being.</p>
                </div>
              </div>
            </div>

            <!-- Creativity Card -->
            <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <div>
                  <h3 class="font-display text-lg font-bold text-secondary mb-2">Encourage Creativity & Fun</h3>
                  <p class="text-secondary/70 text-sm leading-relaxed">Unlock creative potential and foster innovation through engaging and enjoyable team activities.</p>
                </div>
              </div>
            </div>

            <!-- Leadership Card -->
            <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-display text-lg font-bold text-secondary mb-2">Promote Skill-Building & Leadership</h3>
                  <p class="text-secondary/70 text-sm leading-relaxed">Develop essential skills and leadership qualities through expertly crafted learning experiences.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Who Is This For Section -->
    <section class="py-16 lg:py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl lg:text-4xl font-bold text-secondary mb-4">Who Is This For?</h2>
            <p class="text-lg text-secondary/70 max-w-2xl mx-auto">
              Empower, engage, and celebrate Women's Day with experiences designed for connection, growth, and well-being
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-6">
            <!-- Corporate Teams Card -->
            <div class="bg-gradient-to-br from-white to-secondary-light/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div class="flex items-start gap-6">
                <div class="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div class="space-y-4">
                  <h3 class="font-display text-xl font-bold text-secondary">Corporate Teams & HR Managers</h3>
                  <div class="h-px w-16 bg-gradient-to-r from-primary to-primary-light"></div>
                  <p class="text-secondary/70 leading-relaxed">
                    Create a meaningful Women's Day celebration with engaging team-building experiences that inspire and unite your employees.
                  </p>
                </div>
              </div>
            </div>

            <!-- Companies Card -->
            <div class="bg-gradient-to-br from-white to-secondary-light/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div class="flex items-start gap-6">
                <div class="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 7h-9"></path>
                    <path d="M14 17H5"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <circle cx="7" cy="7" r="3"></circle>
                  </svg>
                </div>
                <div class="space-y-4">
                  <h3 class="font-display text-xl font-bold text-secondary">Companies Championing Women's Empowerment</h3>
                  <div class="h-px w-16 bg-gradient-to-r from-primary to-primary-light"></div>
                  <p class="text-secondary/70 leading-relaxed">
                    Invest in activities that promote confidence, collaboration, and well-being, fostering a supportive workplace culture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Indicators -->
    <section class="py-16 lg:py-20 bg-gradient-to-br from-primary-light/5 via-white to-secondary-light">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="font-display text-3xl lg:text-4xl font-bold text-secondary mb-4">Why Choose Trebound?</h2>
            <p class="text-lg text-secondary/70 max-w-2xl mx-auto">
              Join hundreds of forward-thinking companies who trust us to deliver exceptional team experiences
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Trust Card 1 -->
            <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div class="space-y-4">
                <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-display text-lg font-bold text-secondary">Trusted by 500+ Companies</h3>
                  <div class="h-px w-12 bg-gradient-to-r from-primary to-primary-light my-3"></div>
                  <p class="text-secondary/70 text-sm">Building lasting relationships through exceptional experiences</p>
                </div>
              </div>
            </div>

            <!-- Trust Card 2 -->
            <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div class="space-y-4">
                <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-display text-lg font-bold text-secondary">Expert-Led Activities</h3>
                  <div class="h-px w-12 bg-gradient-to-r from-primary to-primary-light my-3"></div>
                  <p class="text-secondary/70 text-sm">Guided by professionals with years of experience</p>
                </div>
              </div>
            </div>

            <!-- Trust Card 3 -->
            <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div class="space-y-4">
                <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <div>
                  <h3 class="font-display text-lg font-bold text-secondary">Tailored Experiences</h3>
                  <div class="h-px w-12 bg-gradient-to-r from-primary to-primary-light my-3"></div>
                  <p class="text-secondary/70 text-sm">Customized to match your team's unique needs</p>
                </div>
              </div>
            </div>

            <!-- Trust Card 4 -->
            <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div class="space-y-4">
                <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 class="font-display text-lg font-bold text-secondary">Proven Track Record</h3>
                  <div class="h-px w-12 bg-gradient-to-r from-primary to-primary-light my-3"></div>
                  <p class="text-secondary/70 text-sm">Consistently delivering memorable experiences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="relative py-20 lg:py-24 overflow-hidden">
      <!-- Background with gradient and pattern -->
      <div class="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-secondary opacity-95"></div>
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTkuOTEgMEg2MHYxLjFBNjAgNjAgMCAwIDAgLjEgMGg1OS44MXpNNjAgNTguOVY2MEg1OS45MUE2MCA2MCAwIDAgMCAuMSA2MGg1OS44MXYtMS4xeiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] bg-[length:20px_20px] opacity-50"></div>
      
      <!-- Decorative shapes -->
      <div class="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div class="container mx-auto px-4 relative">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Main content -->
          <div class="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
            <h2 class="font-display text-4xl lg:text-5xl font-bold text-secondary leading-tight">
              <span class="block mb-2">Celebrate Women's Day</span>
              <span class="relative inline-block">
                With Unique & Engaging Activities!
                <div class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0"></div>
              </span>
            </h2>

            <p class="text-xl text-secondary/80 mb-10 mt-6 font-display">
              Book Now to Secure Your Team's Experience!
            </p>

            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                @click="openProposalModal"
                class="inline-flex items-center px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform group"
              >
                Register Now
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
              <a 
                href="#featured-activities" 
                class="inline-flex items-center px-8 py-4 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary/5 transition-all duration-300"
              >
                View Activities
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useProposal } from '../composables/useProposal'

// Activities data
const activities = [
  {
    id: 'art-workshop',
    title: 'Art Workshop',
    description: 'Relax, unwind, and paint your ideas to life! This guided art session helps de-stress, inspire creativity, and build teamwork in a fun, informal setting. No experience needed—just bring your imagination!',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80'
  },
  {
    id: 'golf-training',
    title: 'Golf Training',
    description: 'Master the art of precision and patience with this beginner-friendly golf session. A great way to bond with colleagues, build strategy skills, and enjoy a refreshing outdoor experience.',
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80'
  },
  {
    id: 'lipstick-making',
    title: 'Lipstick Making Workshop',
    description: 'Create your own signature lipstick shade in this hands-on beauty workshop. Perfect for teams looking to mix fun with creativity!',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80',
    badge: 'Coming Soon'
  },
  {
    id: 'wine-tour',
    title: 'Wine Tour',
    description: 'Step into a stunning vineyard for a guided wine-tasting experience. Learn about winemaking, explore the estate, and indulge in a relaxing, sophisticated day out.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80'
  },
  {
    id: 'wellness',
    title: 'Wellness & Mindfulness',
    description: 'Take a break from work stress with mindful, art-based activities designed to refresh your mind and enhance well-being. Perfect for corporate teams seeking balance!',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80'
  },
  {
    id: 'self-defense',
    title: 'Self-Defense Program',
    description: 'Learn practical self-defense techniques from expert instructors. Build confidence, improve personal safety, and develop essential skills that last a lifetime!',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80'
  },
  {
    id: 'bike-riding',
    title: 'Bike Riding Classes',
    description: 'Whether you\'re a first-time rider or looking to refine your motorcycle skills, our women-centric biking classes provide a safe and supportive environment to build confidence on two wheels.',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80'
  }
]

const { 
  selectedActivities,
  showProposalModal,
  hasSelectedActivities,
  toggleActivity,
  openProposalModal,
  closeProposalModal,
  submitProposal
} = useProposal()
</script>

<style scoped>
/* Add any component-specific styles here */
</style> 