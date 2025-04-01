import React from 'react';

function Footer() {
  return (
    <footer className=" mx-auto text-center mt-5 py-6 bg-gray-100 dark:bg-surface shadow-md rounded-lg">
      <div className="text-center">
        <p className="text-gray-600 dark:text-textSecondary text-sm">
          © 2025 <span className="font-bold text-primary dark:text-accent">NoteSync</span>. All rights reserved.
        </p>
        <div className="mt-3 flex justify-center space-x-4">
          <a
            href="#"
            className="text-gray-500 dark:text-textSecondary hover:text-primary dark:hover:text-accent transition"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-500 dark:text-textSecondary hover:text-primary dark:hover:text-accent transition"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-gray-500 dark:text-textSecondary hover:text-primary dark:hover:text-accent transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;