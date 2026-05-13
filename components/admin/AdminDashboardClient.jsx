"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const emptyPostForm = {
  title: "",
  slug: "",
  category: "",
  excerpt: "",
  author: "",
  date: "",
  readTime: "",
  views: "",
  likes: "",
  comments: "",
  tags: "",
  heroImage: "",
  thumbnail: "",
  contentJson: JSON.stringify([{ heading: "Introduction", body: "" }], null, 2),
};

const emptyOfferForm = {
  title: "",
  slug: "",
  description: "",
  discount: "",
  endDate: "",
  audience: "",
  image: "",
};

const AdminDashboardClient = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("posts");
  const [loading, setLoading] = useState(true);
  const [working, setWorking] = useState(false);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);
  const [offers, setOffers] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [postForm, setPostForm] = useState(emptyPostForm);
  const [offerForm, setOfferForm] = useState(emptyOfferForm);

  const selectedPostLabel = selectedPost ? `Editing ${selectedPost.title}` : "Create new blog post";
  const selectedOfferLabel = selectedOffer ? `Editing ${selectedOffer.title}` : "Create new offer";

  const fetchJson = async (path, options = {}) => {
    const response = await fetch(path, { ...options, cache: "no-store" });
    if (!response.ok) {
      throw new Error((await response.json()).error || "Request failed");
    }
    return response.json();
  };

  const loadData = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const [postsData, offersData] = await Promise.all([fetchJson("/api/posts"), fetchJson("/api/offers")]);
      setPosts(postsData);
      setOffers(offersData);
    } catch (loadError) {
      setError(loadError.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      const response = await fetch("/api/admin/session", { cache: "no-store" });
      if (!response.ok) {
        router.push("/admin");
        return;
      }
      await loadData();
    };

    init();
  }, [router, loadData]);

  const handleInputChange = (event, formKey, setter) => {
    const value = event.target.value;
    setter((current) => ({ ...current, [formKey]: value }));
  };

  const parseTags = (tagsValue) => tagsValue.split(",").map((tag) => tag.trim()).filter(Boolean);

  const uploadFile = async (file) => {
    if (!file) {
      return "";
    }
    const dataUrl = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

    const result = await fetchJson("/api/uploads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dataUrl, folder: "admin-assets" }),
    });

    return result.url;
  };

  const submitPost = async () => {
    setWorking(true);
    setError("");

    try {
      const content = JSON.parse(postForm.contentJson);
      const postPayload = {
        ...postForm,
        tags: parseTags(postForm.tags),
        content,
      };

      if (selectedPost) {
        const slugToUpdate = selectedPost.slug;
        await fetchJson(`/api/posts/${slugToUpdate}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(postPayload),
        });
      } else {
        await fetchJson("/api/posts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(postPayload),
        });
      }

      await loadData();
      resetPostForm();
    } catch (submitError) {
      setError(submitError.message);
    } finally {
      setWorking(false);
    }
  };

  const submitOffer = async () => {
    setWorking(true);
    setError("");

    try {
      const offerPayload = { ...offerForm };
      if (selectedOffer) {
        await fetchJson(`/api/offers/${selectedOffer.slug}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(offerPayload),
        });
      } else {
        await fetchJson("/api/offers", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(offerPayload),
        });
      }

      await loadData();
      resetOfferForm();
    } catch (submitError) {
      setError(submitError.message);
    } finally {
      setWorking(false);
    }
  };

  const resetPostForm = () => {
    setPostForm(emptyPostForm);
    setSelectedPost(null);
  };

  const resetOfferForm = () => {
    setOfferForm(emptyOfferForm);
    setSelectedOffer(null);
  };

  const handlePostSelect = (post) => {
    setSelectedPost(post);
    setPostForm({
      title: post.title || "",
      slug: post.slug || "",
      category: post.category || "",
      excerpt: post.excerpt || "",
      author: post.author || "",
      date: post.date || "",
      readTime: post.readTime || "",
      views: post.views || "",
      likes: post.likes || "",
      comments: post.comments || "",
      tags: Array.isArray(post.tags) ? post.tags.join(", ") : post.tags || "",
      heroImage: post.heroImage || "",
      thumbnail: post.thumbnail || "",
      contentJson: JSON.stringify(post.content || [{ heading: "Introduction", body: "" }], null, 2),
    });
  };

  const handleOfferSelect = (offer) => {
    setSelectedOffer(offer);
    setOfferForm({
      title: offer.title || "",
      slug: offer.slug || "",
      description: offer.description || "",
      discount: offer.discount || "",
      endDate: offer.endDate ? offer.endDate.slice(0, 10) : "",
      audience: offer.audience || "",
      image: offer.image || "",
    });
  };

  const deletePost = async (post) => {
    if (!confirm(`Delete post “${post.title}”? This cannot be undone.`)) {
      return;
    }
    setWorking(true);
    try {
      await fetchJson(`/api/posts/${post.slug}`, { method: "DELETE" });
      await loadData();
      resetPostForm();
    } catch (deleteError) {
      setError(deleteError.message);
    } finally {
      setWorking(false);
    }
  };

  const deleteOffer = async (offer) => {
    if (!confirm(`Delete offer “${offer.title}”?`)) {
      return;
    }
    setWorking(true);
    try {
      await fetchJson(`/api/offers/${offer.slug}`, { method: "DELETE" });
      await loadData();
      resetOfferForm();
    } catch (deleteError) {
      setError(deleteError.message);
    } finally {
      setWorking(false);
    }
  };

  const handleFileChange = async (event, formType, field) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setWorking(true);
    setError("");
    try {
      const url = await uploadFile(file);
      if (formType === "post") {
        setPostForm((current) => ({ ...current, [field]: url }));
      } else {
        setOfferForm((current) => ({ ...current, [field]: url }));
      }
    } catch (uploadError) {
      setError(uploadError.message);
    } finally {
      setWorking(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
  };

  const activeSection = (() => {
    if (activeTab === "posts") {
      return (
        <section className="space-y-6">
          <div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/30">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-white">{selectedPostLabel}</h2>
                <p className="text-sm text-slate-400">Create, update, or delete blog content that appears on the blog page.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button onClick={resetPostForm} className="rounded-2xl bg-slate-800 px-4 py-2 text-sm text-slate-200 hover:bg-slate-700">Reset</button>
                <button onClick={submitPost} disabled={working} className="rounded-2xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400 disabled:opacity-70">{selectedPost ? "Update post" : "Create post"}</button>
              </div>
            </div>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <label className="block text-sm text-slate-200">
                Title
                <input value={postForm.title} onChange={(event) => handleInputChange(event, "title", setPostForm)} className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none" />
              </label>
              <label className="block text-sm text-slate-200">
                Slug
                <input value={postForm.slug} onChange={(event) => handleInputChange(event, "slug", setPostForm)} className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none" />
              </label>
              <label className="block text-sm text-slate-200">
                Category
                <input value={postForm.category} onChange={(event) => handleInputChange(event, "category", setPostForm)} className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none" />
              </label>
              <label className="block text-sm text-slate-200">
                Author
                <input value={postForm.author} onChange={(event) => handleInputChange(event, "author", setPostForm)} className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none" />
              </label>
              <label className="block text-sm text-slate-200">
                Date
                <input value={postForm.date} onChange={(event) => handleInputChange(event, "date", setPostForm)} className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none" placeholder="May 12, 2026" />
              </label>
              <label className="block text-sm text-slate-200">
                Read time
                <input value={postForm.readTime} onChange={(event) => handleInputChange(event, "readTime", setPostForm)} className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none" placeholder="6 mins" />
              </label>
              <label className="block text-sm text-slate-200">
                Views
                <input value={postForm.views} onChange={(event) => handleInputChange(event, "views", setPostForm)} className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none" placeholder="1,200" />
              </label>
              <label className="block text-sm text-slate-200">
                Likes
                <input value={postForm.likes} onChange={(event) => handleInputChange(event, "likes", setPostForm)} className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none" placeholder="310" />
              </label>
              <label className="block text-sm text-slate-200">
                Comments
                <input value={postForm.comments} onChange={(event) => handleInputChange(event, "comments", setPostForm)} className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none" placeholder="32" />
              </label>
              <label className="block text-sm text-slate-200">
                Tags (comma separated)
                <input value={postForm.tags} onChange={(event) => handleInputChange(event, "tags", setPostForm)} className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none" placeholder="AI, Health" />
              </label>
              <label className="block text-sm text-slate-200 lg:col-span-2">
                Excerpt
                <textarea value={postForm.excerpt} onChange={(event) => handleInputChange(event, "excerpt", setPostForm)} className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none" rows="3" />
              </label>
              <label className="block text-sm text-slate-200 lg:col-span-2">
                Hero image URL
                <input value={postForm.heroImage} onChange={(event) => handleInputChange(event, "heroImage", setPostForm)} className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none" placeholder="https://..." />
              </label>
              <label className="block text-sm text-slate-200 lg:col-span-2">
                Thumbnail URL
                <input value={postForm.thumbnail} onChange={(event) => handleInputChange(event, "thumbnail", setPostForm)} className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none" placeholder="https://..." />
              </label>
              <label className="block text-sm text-slate-200 lg:col-span-2">
                Upload hero image
                <input type="file" accept="image/*" onChange={(event) => handleFileChange(event, "post", "heroImage")} className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none" />
              </label>
              <label className="block text-sm text-slate-200 lg:col-span-2">
                Upload thumbnail
                <input type="file" accept="image/*" onChange={(event) => handleFileChange(event, "post", "thumbnail")} className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none" />
              </label>
              <label className="block text-sm text-slate-200 lg:col-span-2">
                Content JSON
                <textarea value={postForm.contentJson} onChange={(event) => handleInputChange(event, "contentJson", setPostForm)} className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none font-mono" rows="8" />
                <p className="mt-2 text-xs text-slate-500">{`Use an array of objects: [{"heading":"...","body":"..."}]`}</p>
              </label>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-4 rounded-3xl border border-slate-700 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20">
              <h3 className="text-lg font-semibold text-white">Blog Posts</h3>
              <p className="text-sm text-slate-400">Select a post to edit or delete it, or use the form to add a new entry.</p>
              <div className="space-y-3">
                {posts.length === 0 ? (
                  <p className="text-sm text-slate-500">No blog posts found.</p>
                ) : (
                  posts.map((post) => (
                    <button key={post.slug} onClick={() => handlePostSelect(post)} className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-left text-sm text-slate-200 transition hover:border-cyan-500 hover:bg-slate-800">
                      <div className="flex items-center justify-between gap-4">
                        <span>{post.title}</span>
                        <span className="text-xs text-slate-500">{post.slug}</span>
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-700 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">Live preview</h3>
                  <p className="text-sm text-slate-400">Latest post data from the active content source.</p>
                </div>
                <button onClick={loadData} className="rounded-2xl bg-slate-800 px-4 py-2 text-sm text-slate-200 hover:bg-slate-700">Refresh</button>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5 text-sm text-slate-300">
                {selectedPost ? (
                  <div className="space-y-3">
                    <p><strong>Selected:</strong> {selectedPost.title}</p>
                    <p><strong>Slug:</strong> {selectedPost.slug}</p>
                    <p><strong>Category:</strong> {selectedPost.category}</p>
                    <p><strong>Audience:</strong> {selectedPost.author}</p>
                  </div>
                ) : (
                  <p>Select a post to preview quick metadata.</p>
                )}
              </div>
              {selectedPost ? (
                <button onClick={() => deletePost(selectedPost)} className="w-full rounded-2xl bg-rose-500 px-4 py-3 text-sm font-semibold text-white hover:bg-rose-400">Delete selected post</button>
              ) : null}
            </div>
          </div>
        </section>
      );
    }

    return (
      <section className="space-y-6">
        <div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/30">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">{selectedOfferLabel}</h2>
              <p className="text-sm text-slate-400">Manage active offers and campaign content.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button onClick={resetOfferForm} className="rounded-2xl bg-slate-800 px-4 py-2 text-sm text-slate-200 hover:bg-slate-700">Reset</button>
              <button onClick={submitOffer} disabled={working} className="rounded-2xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400 disabled:opacity-70">{selectedOffer ? "Update offer" : "Create offer"}</button>
            </div>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <label className="block text-sm text-slate-200">
              Title
              <input value={offerForm.title} onChange={(event) => handleInputChange(event, "title", setOfferForm)} className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none" />
            </label>
            <label className="block text-sm text-slate-200">
              Slug
              <input value={offerForm.slug} onChange={(event) => handleInputChange(event, "slug", setOfferForm)} className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none" />
            </label>
            <label className="block text-sm text-slate-200">
              Discount
              <input value={offerForm.discount} onChange={(event) => handleInputChange(event, "discount", setOfferForm)} className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none" placeholder="15% OFF" />
            </label>
            <label className="block text-sm text-slate-200">
              End date
              <input type="date" value={offerForm.endDate} onChange={(event) => handleInputChange(event, "endDate", setOfferForm)} className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none" />
            </label>
            <label className="block text-sm text-slate-200 lg:col-span-2">
              Audience
              <input value={offerForm.audience} onChange={(event) => handleInputChange(event, "audience", setOfferForm)} className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none" placeholder="General Public" />
            </label>
            <label className="block text-sm text-slate-200 lg:col-span-2">
              Description
              <textarea value={offerForm.description} onChange={(event) => handleInputChange(event, "description", setOfferForm)} className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none" rows="4" />
            </label>
            <label className="block text-sm text-slate-200 lg:col-span-2">
              Image URL
              <input value={offerForm.image} onChange={(event) => handleInputChange(event, "image", setOfferForm)} className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none" />
            </label>
            <label className="block text-sm text-slate-200 lg:col-span-2">
              Upload image/video
              <input type="file" accept="image/*,video/*" onChange={(event) => handleFileChange(event, "offer", "image")} className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none" />
            </label>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4 rounded-3xl border border-slate-700 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20">
            <h3 className="text-lg font-semibold text-white">Active offers</h3>
            <div className="space-y-3">
              {offers.length === 0 ? (
                <p className="text-sm text-slate-500">No active offers found.</p>
              ) : (
                offers.map((offer) => (
                  <button key={offer.slug} onClick={() => handleOfferSelect(offer)} className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-3 text-left text-sm text-slate-200 transition hover:border-cyan-500 hover:bg-slate-800">
                    <div className="flex items-center justify-between gap-4">
                      <span>{offer.title}</span>
                      <span className="text-xs text-slate-500">{offer.slug}</span>
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-slate-700 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/20">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Dashboard actions</h3>
                <p className="text-sm text-slate-400">Save, refresh, or remove content for offers and posts.</p>
              </div>
              <button onClick={loadData} className="rounded-2xl bg-slate-800 px-4 py-2 text-sm text-slate-200 hover:bg-slate-700">Refresh</button>
            </div>
            {selectedOffer ? (
              <button onClick={() => deleteOffer(selectedOffer)} className="w-full rounded-2xl bg-rose-500 px-4 py-3 text-sm font-semibold text-white hover:bg-rose-400">Delete selected offer</button>
            ) : (
              <p className="text-sm text-slate-500">Select an offer from the list to edit or delete it.</p>
            )}
          </div>
        </div>
      </section>
    );
  })();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-3 rounded-3xl border border-slate-700 bg-slate-950/70 p-6 shadow-2xl shadow-slate-900/30 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight">Admin Dashboard</h1>
            <p className="mt-2 text-slate-400">Manage blog posts, campaign offers, and Cloudinary uploads from one admin interface.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setActiveTab("posts")} className={`rounded-2xl px-4 py-2 text-sm font-semibold ${activeTab === "posts" ? "bg-cyan-500 text-slate-950" : "bg-slate-800 text-slate-200 hover:bg-slate-700"}`}>Posts</button>
            <button onClick={() => setActiveTab("offers")} className={`rounded-2xl px-4 py-2 text-sm font-semibold ${activeTab === "offers" ? "bg-cyan-500 text-slate-950" : "bg-slate-800 text-slate-200 hover:bg-slate-700"}`}>Offers</button>
            <button onClick={handleLogout} className="rounded-2xl bg-rose-500 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-400">Logout</button>
          </div>
        </div>

        {error ? <div className="mb-6 rounded-3xl border border-rose-500 bg-rose-950/40 p-4 text-sm text-rose-100">{error}</div> : null}
        {loading ? <div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-10 text-center text-slate-400">Loading admin data…</div> : activeSection}
      </div>
    </main>
  );
};

export default AdminDashboardClient;
