const request = require('supertest');
const app = require('../../src/app');

describe('Product API Routes', () => {
  // Valid API key for tests
  const validApiKey = 'test-api-key';

  describe('GET /api/products', () => {
    it('should return 401 if no API key is provided', async () => {
      const res = await request(app).get('/api/products');
      expect(res.statusCode).toEqual(401);
    });

    it('should return a list of products with valid API key', async () => {
      const res = await request(app)
        .get('/api/products')
        .set('X-API-Key', validApiKey);

      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('products');
      expect(Array.isArray(res.body.products)).toBe(true);
    });

    it('should return products filtered by category', async () => {
      const res = await request(app)
        .get('/api/products?category=electronics')
        .set('X-API-Key', validApiKey);

      expect(res.statusCode).toEqual(200);
      expect(res.body.products.length).toBeGreaterThan(0);
      res.body.products.forEach(product => {
        expect(product.category).toBe('electronics');
      });
    });

    it('should return 400 if an invalid category is provided', async () => {
      const res = await request(app)
        .get('/api/products?category=invalidCategory')
        .set('X-API-Key', validApiKey);

      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty('error');
    });
  });

  describe('GET /api/products/:id', () => {
    it('should return product by ID with valid API key', async () => {
      const productId = 1; // Replace with an actual product ID in your database
      const res = await request(app)
        .get(`/api/products/${productId}`)
        .set('X-API-Key', validApiKey);

      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('id', String(productId));  // Changed to String(productId)
    });

    it('should return 404 if product with given ID is not found', async () => {
      const res = await request(app)
        .get('/api/products/9999') // A non-existent product ID
        .set('X-API-Key', validApiKey);

      expect(res.statusCode).toEqual(404);
      expect(res.body).toHaveProperty('error', 'Product not found');
    });
  });

  describe('POST /api/products', () => {
    it('should create a new product with valid data', async () => {
      const newProduct = {
        name: 'New Product',
        category: 'electronics',
        price: 99.99,
        inStock: true
      };

      const res = await request(app)
        .post('/api/products')
        .set('X-API-Key', validApiKey)
        .send(newProduct);

      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('id');
      expect(res.body.name).toBe(newProduct.name);
    });

    it('should return 400 if required fields are missing', async () => {
      const newProduct = {
        name: 'Incomplete Product', // Missing category, price, etc.
      };

      const res = await request(app)
        .post('/api/products')
        .set('X-API-Key', validApiKey)
        .send(newProduct);

      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty('error', 'Validation failed');
    });
  });

  // More test suites to be added by students
});
