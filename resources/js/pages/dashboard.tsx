import { Head, Link } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { dashboard } from '@/routes';

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />

            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4">

                {/* Dashboard Header */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">
                            Dashboard
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Welcome! Manage your products from here.
                        </p>
                    </div>

                    <Link
                        href="/products"
                        className="inline-flex w-fit items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700"
                    >
                        Manage Products →
                    </Link>
                </div>

                {/* Dashboard Cards */}
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative flex aspect-video flex-col justify-between overflow-hidden rounded-xl border border-sidebar-border/70 p-5 dark:border-sidebar-border">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Product Management
                            </p>
                            <h2 className="mt-2 text-xl font-bold">
                                Products
                            </h2>
                        </div>

                        <Link
                            href="/products"
                            className="text-sm font-medium text-blue-600 hover:underline"
                        >
                            View Products →
                        </Link>

                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10 dark:stroke-neutral-100/10" />
                    </div>

                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 p-5 dark:border-sidebar-border">
                        <h2 className="text-lg font-semibold">
                            Inventory
                        </h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Keep track of your product quantities.
                        </p>
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10 dark:stroke-neutral-100/10" />
                    </div>

                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 p-5 dark:border-sidebar-border">
                        <h2 className="text-lg font-semibold">
                            Quick Access
                        </h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Open your product list and manage records.
                        </p>
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10 dark:stroke-neutral-100/10" />
                    </div>
                </div>

                {/* Main Dashboard Section */}
                <div className="relative min-h-[250px] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 p-6 dark:border-sidebar-border">
                    <div className="relative z-10">
                        <h2 className="text-xl font-bold">
                            Get Started
                        </h2>

                        <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                            Go to the Products page to add new products,
                            update existing information, view product details,
                            or delete products.
                        </p>

                        <Link
                            href="/products"
                            className="mt-5 inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
                        >
                            Go to Products
                        </Link>
                    </div>

                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/10 dark:stroke-neutral-100/10" />
                </div>
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};