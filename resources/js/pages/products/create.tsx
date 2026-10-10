import { Head, Link, useForm } from '@inertiajs/react';

export default function CreateProduct() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
        price: '',
        quantity: '0',
    });

    function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post('/products');
    }

    return (
        <>
            <Head title="Add Product" />

            <div className="min-h-screen bg-gray-50 p-6 text-gray-900 md:p-10">
                <div className="mx-auto max-w-2xl">
                    <div className="mb-8">
                        <Link
                            href="/products"
                            className="text-sm text-blue-600 hover:underline"
                        >
                            ← Back to Products
                        </Link>

                        <h1 className="mt-4 text-3xl font-bold">Add Product</h1>
                        <p className="mt-2 text-gray-600">
                            Enter the product information below.
                        </p>
                    </div>

                    <form
                        onSubmit={submit}
                        className="space-y-5 rounded-xl border bg-white p-6 shadow-sm md:p-8"
                    >
                        <div>
                            <label htmlFor="name" className="mb-2 block font-medium">
                                Product Name *
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                                placeholder="e.g. Wireless Mouse"
                                required
                            />
                            {errors.name && (
                                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="description" className="mb-2 block font-medium">
                                Description
                            </label>
                            <textarea
                                id="description"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                                placeholder="Optional product description"
                                rows={3}
                            />
                            {errors.description && (
                                <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                            )}
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label htmlFor="price" className="mb-2 block font-medium">
                                    Price (₱) *
                                </label>
                                <input
                                    id="price"
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    value={data.price}
                                    onChange={(e) => setData('price', e.target.value)}
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                                    placeholder="0.00"
                                    required
                                />
                                {errors.price && (
                                    <p className="mt-1 text-sm text-red-600">{errors.price}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="quantity" className="mb-2 block font-medium">
                                    Quantity *
                                </label>
                                <input
                                    id="quantity"
                                    type="number"
                                    min="0"
                                    step="1"
                                    value={data.quantity}
                                    onChange={(e) => setData('quantity', e.target.value)}
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                                    required
                                />
                                {errors.quantity && (
                                    <p className="mt-1 text-sm text-red-600">{errors.quantity}</p>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-end gap-3 border-t pt-5">
                            <Link
                                href="/products"
                                className="rounded-lg border border-gray-300 px-5 py-2.5 hover:bg-gray-50"
                            >
                                Cancel
                            </Link>

                            <button
                                type="submit"
                                disabled={processing}
                                className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700 disabled:opacity-50"
                            >
                                {processing ? 'Saving...' : 'Save Product'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}