<template>
  <footer class="bg-secondary pt-16 pb-8 text-white">
    <div class="container mx-auto px-4">
      <!-- Footer Content -->
      <div class="grid md:grid-cols-4 gap-8 pb-8">
        <!-- Logo and Description -->
        <div class="space-y-6">
          <nuxt-img
            src="https://cdn.prod.website-files.com/61ead40fcee1ea7e99aa2b1f/66f3eb4e829a5759d1b0219a_trebound%20logo.png"
            alt="Trebound Logo"
            class="h-10 w-auto brightness-0 invert"
            width="150"
            height="40"
          />
          <p class="text-white/70 text-sm">
            Empowering teams through unique and engaging experiences. Create lasting memories with Trebound.
          </p>
          <div class="flex items-center gap-4">
            <a 
              href="#" 
              target="_blank"
              class="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a 
              href="#" 
              target="_blank"
              class="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="#" 
              target="_blank"
              class="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-display font-bold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li>
              <a href="#featured-activities" class="text-white/70 hover:text-primary transition-colors">Activities</a>
            </li>
            <li>
              <a href="#why-us" class="text-white/70 hover:text-primary transition-colors">Why Choose Us</a>
            </li>
            <li>
              <a href="#contact" class="text-white/70 hover:text-primary transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-display font-bold mb-4">Contact Us</h4>
          <ul class="space-y-2">
            <li class="flex items-center gap-2 text-white/70">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="mailto:info@trebound.com" class="hover:text-primary transition-colors">info@trebound.com</a>
            </li>
            <li class="flex items-center gap-2 text-white/70">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <a href="tel:+1234567890" class="hover:text-primary transition-colors">+1 (234) 567-890</a>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h4 class="text-lg font-display font-bold mb-4">Stay Updated</h4>
          <p class="text-white/70 text-sm mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
          <form @submit.prevent class="space-y-2">
            <input 
              type="email" 
              placeholder="Enter your email"
              class="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            />
            <button 
              type="submit"
              class="w-full px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 transition-colors font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <!-- Copyright -->
      <div class="pt-8 border-t border-white/10 text-center text-white/50 text-sm">
        <p>&copy; {{ new Date().getFullYear() }} Trebound. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template> 