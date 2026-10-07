import { z } from 'zod';

// Login Validation Schema
export const loginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

// Blog Article Validation Schema
export const blogSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters long'),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug must be kebab-case (e.g., my-blog-post)'),
  content: z.string().min(10, 'Content is too short'),
  category: z.string().min(1, 'Please select a category'),
  tags: z.array(z.string()).optional(),
  imageUrl: z.string().url('Invalid image URL').optional().or(z.literal('')),
});

// Contact Form Validation Schema
export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long'),
  email: z.string().email('Invalid email format'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits').regex(/^\+?[\d\s-]{10,}$/, 'Invalid phone format'),
  service: z.string().min(1, 'Please select a service'),
  company: z.string().optional(),
  website: z.string().url('Invalid website URL').optional().or(z.literal('')),
  message: z.string().min(10, 'Please provide a bit more detail in your message'),
});
