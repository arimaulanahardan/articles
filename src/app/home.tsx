"use client";
import { Button } from "@/components/ui/button";
import NavbarComponents from "@/components/layouts/NavbarComponent";
import ArticleComponent from "@/components/ArticleComponent";

export default function HomePage() {

  return (
    <div className="flex flex-col min-h-screen absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <NavbarComponents />
      <main className="min-h-[calc(100vh-57px-97px)] flex-1">
        <div className="container relative pb-10">
          <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-6">
            <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
              Share Your Thoughts, Inspire the World
            </h1>
            <span className="max-w-[750px] text-center text-lg font-light text-foreground">
              Welcome to WordWeave. your platform to create, share, and discover
              articles that matter. Whether you're here to write your first
              article or explore inspiring stories, this is your space to
              connect with ideas that ignite your passion
            </span>
            <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-6">
              <Button variant="default">Create Your Own Article</Button>
            </div>
          </section>
          <ArticleComponent/>
        </div>
      </main>

      <footer className="py-6 md:py-0 border-t border-border/40">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
            &copy; 2025 WordWeave. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
