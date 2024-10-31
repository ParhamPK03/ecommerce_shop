export async function getAllCategory() {
  try {
    const categoryRes = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    if (!categoryRes.ok) {
      throw new Error("Failed to fetch categories");
    }
    return await categoryRes.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    return []; // بازگشت یک آرایه خالی به عنوان حالت پیش‌فرض
  }
}

export async function getAllProduct() {
  try {
    const productRes = await fetch("https://fakestoreapi.com/products");
    if (!productRes.ok) {
      throw new Error("Failed to fetch products");
    }
    return await productRes.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // بازگشت یک آرایه خالی به عنوان حالت پیش‌فرض
  }
}

export async function getSingleProduct(id: string) {
  try {
    const getSingleProductRes = await fetch(
      `https://fakestoreapi.com/products/${id}`
    );
    if (!getSingleProductRes.ok) {
      throw new Error(`Failed to fetch product with id: ${id}`);
    }
    return await getSingleProductRes.json();
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    return null; // بازگشت null به عنوان حالت پیش‌فرض
  }
}

export async function getProductByCategory(category: string) {
  try {
    const getProductByCategoryRes = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    if (!getProductByCategoryRes.ok) {
      throw new Error(`Failed to fetch products for category: ${category}`);
    }
    return await getProductByCategoryRes.json();
  } catch (error) {
    console.error(`Error fetching products for category ${category}:`, error);
    return []; // بازگشت یک آرایه خالی به عنوان حالت پیش‌فرض
  }
}
