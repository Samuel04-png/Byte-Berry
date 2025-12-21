import { Order } from '@/types/order';

const STORAGE_KEY = 'byteandberry_orders';

/**
 * Save order to localStorage
 */
export function saveOrder(order: Order): void {
  try {
    const orders = getOrders();
    orders.push(order);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
  } catch (error) {
    console.error('Error saving order to localStorage:', error);
  }
}

/**
 * Get all saved orders from localStorage
 */
export function getOrders(): Order[] {
  try {
    const ordersJson = localStorage.getItem(STORAGE_KEY);
    if (!ordersJson) return [];
    
    const orders = JSON.parse(ordersJson) as Order[];
    return Array.isArray(orders) ? orders : [];
  } catch (error) {
    console.error('Error reading orders from localStorage:', error);
    return [];
  }
}

/**
 * Clear all orders from localStorage
 */
export function clearOrders(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing orders from localStorage:', error);
  }
}

