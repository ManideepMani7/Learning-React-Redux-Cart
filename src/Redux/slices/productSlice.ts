import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type Product = {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
}

interface ProductState {
    items: Product[]
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}

const initialState: ProductState = {
    items: [],
    status: "idle",
    error: null
}

export const fetchProducts = createAsyncThunk<Product[]>('products', async () => {
    const resp = await fetch("https://dummyjson.com/products");
    const jsonResp = await resp.json();
    return jsonResp.products as Product[];
})

const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.status = "succeeded",
                    state.items = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || "Something went wrong";
            });
    }
})

export default productSlice.reducer;