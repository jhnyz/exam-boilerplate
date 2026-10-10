import { Head, Link, router } from '@inertiajs/react';

type Product = {
    id: number;
    name: string;
    description: string | null;
    price: number | string;
    quantity: number;
};

type Props = {
    products: Product[];
};

export default function ProductsIndex({ products }: Props) {
    function deleteProduct(id: number, name: string) {
        const confirmed = confirm(
            `Are you sure you want to delete "${name}"?`,
        );

        if (confirmed) {
            router.delete(`/products/${id}`);
        }
    }

    const totalStock = products.reduce(
        (total, product) => total + Number(product.quantity),
        0,
    );

    const inventoryValue = products.reduce(
        (total, product) =>
            total + Number(product.price) * Number(product.quantity),
        0,
    );

    const peso = (amount: number) =>
        `₱${amount.toLocaleString('en-PH', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })}`;

    return (
        <>
            <Head title="Products" />

            <div className="min-h-screen bg-gray-50 p-6 text-gray-900 md:p-10">
                <div className="mx-auto max-w-6xl">

                    {/* PAGE HEADER */}
                    <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold">
                                Products
                            </h1>

                            <p className="mt-2 text-gray-600">
                                Manage your inventory products.
                            </p>
                        </div>

                        {/* ALWAYS VISIBLE BUTTONS */}
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/dashboard"
                                className="rounded-lg border border-gray-300 bg-white px-4 py-2 font-medium hover:bg-gray-100"
                            >
                                Dashboard
                            </Link>

                            <Link
                                href="/products/create"
                                className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
                            >
                                + Add Product
                            </Link>
                        </div>
                    </div>

                    {/* SUMMARY CARDS */}
                    <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-xl border bg-white p-5 shadow-sm">
                            <p className="text-sm text-gray-500">
                                Total Products
                            </p>

                            <p className="mt-2 text-3xl font-bold">
                                {products.length}
                            </p>
                        </div>

                        <div className="rounded-xl border bg-white p-5 shadow-sm">
                            <p className="text-sm text-gray-500">
                                Total Stock
                            </p>

                            <p className="mt-2 text-3xl font-bold">
                                {totalStock.toLocaleString('en-PH')}
                            </p>
                        </div>

                        <div className="rounded-xl border bg-white p-5 shadow-sm">
                            <p className="text-sm text-gray-500">
                                Inventory Value
                            </p>

                            <p className="mt-2 text-3xl font-bold">
                                {peso(inventoryValue)}
                            </p>
                        </div>
                    </div>

                    {/* PRODUCTS TABLE */}
                    <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-3 border-b p-5">
                            <div>
                                <h2 className="text-lg font-semibold">
                                    Product List
                                </h2>

                                <p className="mt-1 text-sm text-gray-500">
                                    View and manage all your products.
                                </p>
                            </div>

                            {/* SECOND ADD BUTTON */}
                            <Link
                                href="/products/create"
                                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                            >
                                + Add New
                            </Link>
                        </div>

                        {products.length === 0 ? (
                            <div className="px-6 py-14 text-center">
                                <div className="mb-3 text-4xl">
                                    📦
                                </div>

                                <h3 className="text-lg font-semibold">
                                    No products yet
                                </h3>

                                <p className="mt-2 text-gray-500">
                                    Add your first product to get started.
                                </p>

                                <Link
                                    href="/products/create"
                                    className="mt-5 inline-flex rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700"
                                >
                                    + Add Your First Product
                                </Link>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-gray-100 text-gray-600">
                                        <tr>
                                            <th className="px-5 py-4">
                                                #
                                            </th>

                                            <th className="px-5 py-4">
                                                Product Name
                                            </th>

                                            <th className="px-5 py-4">
                                                Price
                                            </th>

                                            <th className="px-5 py-4">
                                                Quantity
                                            </th>

                                            <th className="px-5 py-4">
                                                Description
                                            </th>

                                            <th className="px-5 py-4">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="divide-y divide-gray-100">
                                        {products.map((product, index) => (
                                            <tr
                                                key={product.id}
                                                className="hover:bg-gray-50"
                                            >
                                                <td className="px-5 py-4 text-gray-500">
                                                    {index + 1}
                                                </td>

                                                <td className="px-5 py-4 font-medium text-gray-900">
                                                    {product.name}
                                                </td>

                                                <td className="whitespace-nowrap px-5 py-4">
                                                    {peso(Number(product.price))}
                                                </td>

                                                <td className="px-5 py-4">
                                                    <span
                                                        className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                                                            Number(product.quantity) === 0
                                                                ? 'bg-red-100 text-red-700'
                                                                : Number(product.quantity) <= 5
                                                                  ? 'bg-yellow-100 text-yellow-700'
                                                                  : 'bg-blue-100 text-blue-700'
                                                        }`}
                                                    >
                                                        {product.quantity}
                                                    </span>
                                                </td>

                                                <td className="max-w-xs px-5 py-4 text-gray-600">
                                                    <span className="line-clamp-2">
                                                        {product.description || 'No description'}
                                                    </span>
                                                </td>

                                                <td className="px-5 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <Link
                                                            href={`/products/${product.id}`}
                                                            className="font-medium text-gray-700 hover:underline"
                                                        >
                                                            View
                                                        </Link>

                                                        <Link
                                                            href={`/products/${product.id}/edit`}
                                                            className="font-medium text-blue-600 hover:underline"
                                                        >
                                                            Edit
                                                        </Link>

                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                deleteProduct(
                                                                    product.id,
                                                                    product.name,
                                                                )
                                                            }
                                                            className="font-medium text-red-600 hover:underline"
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {/* TABLE FOOTER */}
                        <div className="flex flex-wrap items-center justify-between gap-3 border-t bg-gray-50 px-5 py-4 text-sm text-gray-500">
                            <span>
                                Total records: {products.length}
                            </span>

                            <Link
                                href="/products/create"
                                className="font-medium text-blue-600 hover:underline"
                            >
                                Add another product →
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
