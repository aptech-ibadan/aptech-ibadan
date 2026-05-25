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

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&family=Space+Mono:wght@400;700&display=swap');

  :root {
    --navy: #0d1b3e;
    --navy-2: #162348;
    --navy-3: #1e2f5a;
    --navy-4: #253870;
    --gold: #f5a800;
    --gold-2: #ffc72c;
    --gold-dim: rgba(245,168,0,0.14);
    --gold-border: rgba(245,168,0,0.28);
    --white: #ffffff;
    --muted: rgba(255,255,255,0.45);
    --muted-2: rgba(255,255,255,0.22);
    --border: rgba(255,255,255,0.07);
    --border-strong: rgba(255,255,255,0.13);
    --danger: #f87171;
    --danger-bg: rgba(248,113,113,0.1);
    --danger-border: rgba(248,113,113,0.28);
    --success: #4ade80;
    --success-bg: rgba(74,222,128,0.1);
    --radius: 6px;
    --radius-lg: 12px;
    --radius-xl: 18px;
    --mono: 'Space Mono', monospace;
    --sans: 'Nunito Sans', sans-serif;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: var(--sans);
    background: var(--navy);
    color: var(--white);
    font-size: 14px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  .admin-root { min-height: 100vh; background: var(--navy); }

  .topbar {
    position: sticky;
    top: 80px;
    z-index: 50;
    background: var(--navy-2);
    border-bottom: 1px solid var(--border);
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
  }

  .topbar-brand { display: flex; align-items: center; gap: 8px; }

  .brand-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--gold); }

  .brand-name {
    font-size: 11px; font-weight: 800;
    letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted);
  }

  .brand-sep { color: var(--muted-2); }

  .brand-section {
    font-size: 11px; font-weight: 800;
    letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold);
  }

  .topbar-actions { display: flex; align-items: center; gap: 8px; }

  .tab-nav {
    display: flex; align-items: center; gap: 2px;
    background: var(--navy-3);
    border-radius: var(--radius);
    padding: 3px;
    border: 1px solid var(--border);
  }

  .tab-btn {
    font-family: var(--sans);
    font-size: 11px; font-weight: 800;
    letter-spacing: 0.07em; text-transform: uppercase;
    padding: 5px 16px;
    border-radius: calc(var(--radius) - 2px);
    border: none; cursor: pointer; transition: all 0.15s;
    color: var(--muted); background: transparent;
  }

  .tab-btn.active { background: var(--gold); color: var(--navy); }
  .tab-btn:not(.active):hover { color: var(--white); }

  .btn {
    font-family: var(--sans);
    font-size: 11px; font-weight: 800;
    letter-spacing: 0.07em; text-transform: uppercase;
    padding: 7px 16px;
    border-radius: var(--radius);
    border: 1px solid var(--border-strong);
    cursor: pointer; transition: all 0.15s;
    background: var(--navy-3); color: var(--muted);
    display: inline-flex; align-items: center; gap: 6px;
  }

  .btn:hover { background: var(--navy-4); color: var(--white); }
  .btn:active { transform: scale(0.98); }
  .btn:disabled { opacity: 0.4; cursor: not-allowed; }

  .btn-primary { background: var(--gold); color: var(--navy); border-color: var(--gold); }
  .btn-primary:hover { background: var(--gold-2); border-color: var(--gold-2); color: var(--navy); }

  .btn-ghost { background: transparent; border-color: transparent; color: var(--muted); }
  .btn-ghost:hover { background: var(--navy-3); color: var(--white); border-color: transparent; }

  .btn-danger { background: var(--danger-bg); color: var(--danger); border-color: var(--danger-border); }
  .btn-danger:hover { background: rgba(248,113,113,0.18); }

  .btn-outline { background: transparent; border-color: var(--gold-border); color: var(--gold); }
  .btn-outline:hover { background: var(--gold-dim); border-color: var(--gold); color: var(--gold-2); }

  .btn-sm { padding: 4px 12px; font-size: 10px; }

  .page-content { max-width: 1300px; margin: 0 auto; padding: 2.5rem 2rem; }

  .page-header {
    margin-bottom: 2rem; padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--border);
    display: flex; align-items: flex-end;
    justify-content: space-between; gap: 1rem;
  }

  .page-eyebrow {
    display: flex; align-items: center; gap: 6px;
    font-family: var(--mono); font-size: 10px;
    color: var(--gold); letter-spacing: 0.1em; text-transform: uppercase;
    margin-bottom: 8px;
  }

  .eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--gold); }

  .page-title {
    font-size: 30px; font-weight: 800;
    letter-spacing: -0.02em; line-height: 1.1; color: var(--white);
  }

  .page-title span { color: var(--gold); }
  .page-sub { font-size: 13px; color: var(--muted); margin-top: 5px; }

  .status-live {
    display: inline-flex; align-items: center; gap: 6px;
    font-family: var(--mono); font-size: 10px;
    color: var(--success); background: var(--success-bg);
    border: 1px solid rgba(74,222,128,0.2);
    padding: 4px 10px; border-radius: 20px;
    letter-spacing: 0.05em; text-transform: uppercase;
  }

  .live-dot {
    width: 5px; height: 5px; border-radius: 50%; background: var(--success);
    animation: livepulse 2s ease-in-out infinite;
  }

  @keyframes livepulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }

  .split {
    display: grid; grid-template-columns: 320px 1fr;
    gap: 1.5rem; align-items: start;
  }

  @media (max-width: 960px) { .split { grid-template-columns: 1fr; } }

  .sidebar-panel { position: sticky; top: 80px; }

  .panel {
    background: var(--navy-2);
    border: 1px solid var(--border);
    border-radius: var(--radius-xl); overflow: hidden;
  }

  .panel-header {
    padding: 14px 18px; border-bottom: 1px solid var(--border);
    display: flex; align-items: center; justify-content: space-between;
    background: var(--navy-3);
  }

  .panel-title {
    font-size: 10px; font-weight: 800;
    letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted);
  }

  .panel-count {
    font-family: var(--mono); font-size: 11px; color: var(--gold);
    background: var(--gold-dim); border: 1px solid var(--gold-border);
    border-radius: 20px; padding: 1px 10px;
  }

  .panel-body { padding: 8px; }

  .list-item {
    display: flex; align-items: center; justify-content: space-between;
    gap: 10px; padding: 10px 12px;
    border-radius: var(--radius-lg); cursor: pointer;
    transition: all 0.12s; border: 1px solid transparent;
    background: transparent; width: 100%; text-align: left;
  }

  .list-item:hover { background: var(--navy-3); border-color: var(--border); }
  .list-item.selected { background: var(--gold-dim); border-color: var(--gold-border); }

  .list-item-main { min-width: 0; flex: 1; }

  .list-item-title {
    font-size: 13px; font-weight: 600; color: var(--white);
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis; line-height: 1.3;
  }

  .list-item.selected .list-item-title { color: var(--gold); }

  .list-item-slug { font-family: var(--mono); font-size: 10px; color: var(--muted); margin-top: 2px; }

  .list-item-arrow {
    color: var(--muted); font-size: 18px; flex-shrink: 0;
    opacity: 0; transition: opacity 0.12s;
  }

  .list-item:hover .list-item-arrow,
  .list-item.selected .list-item-arrow { opacity: 1; }
  .list-item.selected .list-item-arrow { color: var(--gold); }

  .list-empty { padding: 2.5rem 1rem; text-align: center; font-size: 13px; color: var(--muted); }

  .list-scroll {
    max-height: calc(100vh - 260px); overflow-y: auto;
    scrollbar-width: thin; scrollbar-color: var(--navy-4) transparent;
  }

  .panel-delete-footer { padding: 8px; border-top: 1px solid var(--border); }

  .form-panel {
    background: var(--navy-2); border: 1px solid var(--border);
    border-radius: var(--radius-xl); overflow: hidden;
  }

  .form-header {
    padding: 18px 24px; border-bottom: 1px solid var(--border);
    display: flex; align-items: center; justify-content: space-between;
    gap: 12px; background: var(--navy-3);
  }

  .form-badge {
    font-family: var(--mono); font-size: 9px; font-weight: 700;
    letter-spacing: 0.08em; text-transform: uppercase;
    padding: 3px 10px; border-radius: 20px;
  }

  .form-badge.new { background: var(--success-bg); color: var(--success); border: 1px solid rgba(74,222,128,0.22); }
  .form-badge.editing { background: var(--gold-dim); color: var(--gold); border: 1px solid var(--gold-border); }

  .form-title { font-size: 15px; font-weight: 700; color: var(--white); }

  .form-header-right { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }

  .form-body { padding: 24px; }

  .field-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .field-grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }

  @media (max-width: 700px) { .field-grid, .field-grid-3 { grid-template-columns: 1fr; } }

  .span-2 { grid-column: span 2; }
  .span-3 { grid-column: span 3; }

  @media (max-width: 700px) { .span-2, .span-3 { grid-column: span 1; } }

  .field-label {
    display: block; font-size: 10px; font-weight: 700;
    letter-spacing: 0.08em; text-transform: uppercase;
    color: var(--muted); margin-bottom: 6px;
  }

  .field-input {
    font-family: var(--sans); font-size: 13px;
    color: var(--white); background: var(--navy-3);
    border: 1px solid var(--border-strong);
    border-radius: var(--radius);
    padding: 9px 13px; width: 100%; outline: none;
    transition: border-color 0.15s, box-shadow 0.15s;
  }

  .field-input:hover { border-color: rgba(255,255,255,0.22); }
  .field-input:focus { border-color: var(--gold); box-shadow: 0 0 0 3px var(--gold-dim); }
  .field-input::placeholder { color: var(--muted); opacity: 0.6; }

  .field-textarea { font-family: var(--sans); resize: vertical; min-height: 80px; }
  .field-mono { font-family: var(--mono); font-size: 12px; line-height: 1.5; }
  .field-hint { font-family: var(--mono); font-size: 10px; color: var(--muted); margin-top: 5px; }

  .form-section { margin-top: 24px; padding-top: 24px; border-top: 1px solid var(--border); }

  .form-section-label {
    font-size: 10px; font-weight: 700;
    letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--gold); margin-bottom: 16px;
    display: flex; align-items: center; gap: 10px;
  }

  .form-section-label::after { content: ''; flex: 1; height: 1px; background: var(--border); }

  /* ── Image field ── */
  .img-field-root {}

  .img-field-header {
    display: flex; align-items: center;
    justify-content: space-between; margin-bottom: 8px;
  }

  .img-toggle-wrap {
    display: flex; border: 1px solid var(--border-strong);
    border-radius: var(--radius); overflow: hidden; width: fit-content;
  }

  .img-toggle-btn {
    font-family: var(--sans); font-size: 10px; font-weight: 800;
    letter-spacing: 0.06em; text-transform: uppercase;
    padding: 5px 13px; border: none; cursor: pointer;
    transition: all 0.12s; background: transparent; color: var(--muted);
  }

  .img-toggle-btn.active { background: var(--gold); color: var(--navy); }
  .img-toggle-btn:not(.active):hover { color: var(--white); }

  .img-preview {
    margin-top: 10px; border-radius: var(--radius-lg);
    overflow: hidden; border: 1px solid var(--border); height: 120px;
  }

  .img-preview img { width: 100%; height: 100%; object-fit: cover; display: block; }

  /* ── Preview card ── */
  .preview-card {
    margin-top: 12px; padding: 16px 18px;
    background: var(--navy-3); border-radius: var(--radius-lg);
    border: 1px solid var(--border);
  }

  .preview-label {
    font-family: var(--mono); font-size: 9px;
    letter-spacing: 0.1em; text-transform: uppercase;
    color: var(--gold); margin-bottom: 10px;
    display: flex; align-items: center; gap: 6px;
  }

  .preview-label::before {
    content: ''; display: inline-block;
    width: 5px; height: 5px; border-radius: 50%; background: var(--gold);
  }

  .preview-kv {
    display: flex; align-items: baseline; gap: 10px;
    padding: 5px 0; border-bottom: 1px solid var(--border); font-size: 13px;
  }

  .preview-kv:last-child { border-bottom: none; }

  .preview-key {
    font-family: var(--mono); font-size: 9px; color: var(--muted);
    text-transform: uppercase; letter-spacing: 0.06em;
    min-width: 64px; flex-shrink: 0;
  }

  .preview-val { color: var(--white); font-size: 12px; }

  .error-banner {
    background: var(--danger-bg); border: 1px solid var(--danger-border);
    border-radius: var(--radius-lg); padding: 12px 16px;
    color: var(--danger); font-size: 13px; margin-bottom: 1.5rem;
    display: flex; align-items: center; gap: 8px;
  }

  .loading-state { padding: 5rem 2rem; text-align: center; color: var(--muted); font-size: 13px; }

  .loading-dots { display: flex; justify-content: center; gap: 6px; margin-bottom: 14px; }

  .dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: var(--gold); opacity: 0.3;
    animation: dotpulse 1.2s ease-in-out infinite;
  }

  .dot:nth-child(2) { animation-delay: 0.2s; }
  .dot:nth-child(3) { animation-delay: 0.4s; }

  @keyframes dotpulse {
    0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
    40% { opacity: 1; transform: scale(1); }
  }
`;

// ── ImageField ───────────────────────────────────────────────
// Defined at module level so it never gets recreated on parent renders.
// `value` is the controlled value from the parent form state.
// `mode` and `previewUrl` are local UI concerns only.
const ImageField = ({ label, value, onChange }) => {
  const [mode, setMode] = useState("url");

  // Keep a local preview URL. When the parent resets the form (value → ""),
  // we clear the preview too. When mode is "url" the preview simply mirrors
  // `value` so we don't need extra state for it.
  const [filePreview, setFilePreview] = useState("");

  // Sync: if the parent clears the value (e.g. form reset), also clear the
  // file preview so the old thumbnail doesn't linger.
  useEffect(() => {
    if (!value) setFilePreview("");
  }, [value]);

  const handleUrlChange = (e) => {
    onChange(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      onChange(reader.result);
      setFilePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const switchMode = (m) => {
    setMode(m);
    onChange("");
    setFilePreview("");
  };

  // The preview to render: for URL mode use `value` directly; for upload mode
  // use the local base64 string stored in `filePreview`.
  const previewSrc = mode === "url" ? value : filePreview;

  return (
    <div className="img-field-root">
      <div className="img-field-header">
        <label className="field-label" style={{ marginBottom: 0 }}>{label}</label>
        <div className="img-toggle-wrap">
          <button
            type="button"
            className={`img-toggle-btn ${mode === "url" ? "active" : ""}`}
            onClick={() => switchMode("url")}
          >
            URL
          </button>
          <button
            type="button"
            className={`img-toggle-btn ${mode === "upload" ? "active" : ""}`}
            onClick={() => switchMode("upload")}
          >
            Upload
          </button>
        </div>
      </div>

      {mode === "url" ? (
        <input
          className="field-input"
          value={value}
          onChange={handleUrlChange}
          placeholder="https://example.com/image.jpg"
        />
      ) : (
        <input
          className="field-input"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      )}

      {previewSrc && (
        <div className="img-preview">
          <img
            src={previewSrc}
            alt="Preview"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        </div>
      )}
    </div>
  );
};

// ── PostsSection ─────────────────────────────────────────────
// Lifted out of AdminDashboardClient so React never unmounts/remounts it
// on parent state changes (which was resetting input focus on every keystroke).
const PostsSection = ({
  posts,
  selectedPost,
  postForm,
  working,
  onSelect,
  onInputChange,
  onSubmit,
  onReset,
  onDelete,
  setPostForm,
}) => (
  <div className="split">
    {/* Sidebar list */}
    <div className="sidebar-panel">
      <div className="panel">
        <div className="panel-header">
          <span className="panel-title">All Posts</span>
          <span className="panel-count">{posts.length}</span>
        </div>
        <div className="panel-body list-scroll">
          {posts.length === 0 ? (
            <div className="list-empty">No posts yet</div>
          ) : (
            posts.map((post) => (
              <button
                key={post.slug}
                className={`list-item ${selectedPost?.slug === post.slug ? "selected" : ""}`}
                onClick={() => onSelect(post)}
              >
                <div className="list-item-main">
                  <div className="list-item-title">{post.title}</div>
                  <div className="list-item-slug">/{post.slug}</div>
                </div>
                <span className="list-item-arrow">›</span>
              </button>
            ))
          )}
        </div>
        {selectedPost && (
          <div className="panel-delete-footer">
            <button
              className="btn btn-danger"
              style={{ width: "100%", justifyContent: "center" }}
              onClick={() => onDelete(selectedPost)}
              disabled={working}
            >
              Delete selected post
            </button>
          </div>
        )}
      </div>

      {selectedPost && (
        <div className="preview-card">
          <div className="preview-label">Quick preview</div>
          {selectedPost.heroImage && (
            <div className="img-preview" style={{ marginBottom: 12 }}>
              <img src={selectedPost.heroImage} alt="Hero" />
            </div>
          )}
          <div className="preview-kv">
            <span className="preview-key">Category</span>
            <span className="preview-val">{selectedPost.category || "—"}</span>
          </div>
          <div className="preview-kv">
            <span className="preview-key">Author</span>
            <span className="preview-val">{selectedPost.author || "—"}</span>
          </div>
          <div className="preview-kv">
            <span className="preview-key">Date</span>
            <span className="preview-val">{selectedPost.date || "—"}</span>
          </div>
          <div className="preview-kv">
            <span className="preview-key">Views</span>
            <span className="preview-val">{selectedPost.views || "—"}</span>
          </div>
        </div>
      )}
    </div>

    {/* Form */}
    <div className="form-panel">
      <div className="form-header">
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span className={`form-badge ${selectedPost ? "editing" : "new"}`}>
            {selectedPost ? "editing" : "new post"}
          </span>
          <span className="form-title">
            {selectedPost ? selectedPost.title : "Create blog post"}
          </span>
        </div>
        <div className="form-header-right">
          <button className="btn btn-ghost btn-sm" onClick={onReset}>Discard</button>
          <button className="btn btn-primary" onClick={onSubmit} disabled={working}>
            {working ? "Saving…" : selectedPost ? "Update post" : "Publish post"}
          </button>
        </div>
      </div>

      <div className="form-body">
        <div className="form-section-label" style={{ marginTop: 0, paddingTop: 0, borderTop: "none" }}>
          Meta
        </div>
        <div className="field-grid">
          <label>
            <span className="field-label">Title</span>
            <input className="field-input" value={postForm.title} onChange={(e) => onInputChange(e, "title")} placeholder="Post title…" />
          </label>
          <label>
            <span className="field-label">Slug</span>
            <input className="field-input" value={postForm.slug} onChange={(e) => onInputChange(e, "slug")} placeholder="my-post-slug" />
          </label>
          <label>
            <span className="field-label">Category</span>
            <input className="field-input" value={postForm.category} onChange={(e) => onInputChange(e, "category")} placeholder="Technology" />
          </label>
          <label>
            <span className="field-label">Author</span>
            <input className="field-input" value={postForm.author} onChange={(e) => onInputChange(e, "author")} placeholder="Jane Smith" />
          </label>
          <label>
            <span className="field-label">Date</span>
            <input type="date" className="field-input" value={postForm.date} onChange={(e) => onInputChange(e, "date")} />
          </label>
          <label>
            <span className="field-label">Read time</span>
            <input className="field-input" value={postForm.readTime} onChange={(e) => onInputChange(e, "readTime")} placeholder="6 mins" />
          </label>
          <label className="span-2">
            <span className="field-label">Tags (comma-separated)</span>
            <input className="field-input" value={postForm.tags} onChange={(e) => onInputChange(e, "tags")} placeholder="Networking, Cybersecurity, IT" />
          </label>
          <label className="span-2">
            <span className="field-label">Excerpt</span>
            <textarea className="field-input field-textarea" value={postForm.excerpt} onChange={(e) => onInputChange(e, "excerpt")} rows={3} placeholder="Short summary shown in post listings…" />
          </label>
        </div>

        <div className="form-section">
          <div className="form-section-label">Engagement stats</div>
          <div className="field-grid-3">
            <label>
              <span className="field-label">Views</span>
              <input className="field-input" value={postForm.views} onChange={(e) => onInputChange(e, "views")} placeholder="1,200" />
            </label>
            <label>
              <span className="field-label">Likes</span>
              <input className="field-input" value={postForm.likes} onChange={(e) => onInputChange(e, "likes")} placeholder="310" />
            </label>
            <label>
              <span className="field-label">Comments</span>
              <input className="field-input" value={postForm.comments} onChange={(e) => onInputChange(e, "comments")} placeholder="32" />
            </label>
          </div>
        </div>

        <div className="form-section">
          <div className="form-section-label">Images</div>
          <div className="field-grid">
            <ImageField
              label="Hero Image"
              value={postForm.heroImage}
              onChange={(val) => setPostForm((c) => ({ ...c, heroImage: val }))}
            />
            <ImageField
              label="Thumbnail"
              value={postForm.thumbnail}
              onChange={(val) => setPostForm((c) => ({ ...c, thumbnail: val }))}
            />
          </div>
        </div>

        <div className="form-section">
          <div className="form-section-label">Content JSON</div>
          <label>
            <textarea
              className="field-input field-textarea field-mono"
              value={postForm.contentJson}
              onChange={(e) => onInputChange(e, "contentJson")}
              rows={10}
            />
            <p className="field-hint">[{`{"heading":"...","body":"..."}`}, …]</p>
          </label>
        </div>
      </div>
    </div>
  </div>
);

// ── OffersSection ────────────────────────────────────────────
const OffersSection = ({
  offers,
  selectedOffer,
  offerForm,
  working,
  onSelect,
  onInputChange,
  onSubmit,
  onReset,
  onDelete,
  setOfferForm,
}) => (
  <div className="split">
    {/* Sidebar list */}
    <div className="sidebar-panel">
      <div className="panel">
        <div className="panel-header">
          <span className="panel-title">Active Offers</span>
          <span className="panel-count">{offers.length}</span>
        </div>
        <div className="panel-body list-scroll">
          {offers.length === 0 ? (
            <div className="list-empty">No offers yet</div>
          ) : (
            offers.map((offer) => (
              <button
                key={offer.slug}
                className={`list-item ${selectedOffer?.slug === offer.slug ? "selected" : ""}`}
                onClick={() => onSelect(offer)}
              >
                <div className="list-item-main">
                  <div className="list-item-title">{offer.title}</div>
                  <div className="list-item-slug">{offer.discount || offer.slug}</div>
                </div>
                <span className="list-item-arrow">›</span>
              </button>
            ))
          )}
        </div>
        {selectedOffer && (
          <div className="panel-delete-footer">
            <button
              className="btn btn-danger"
              style={{ width: "100%", justifyContent: "center" }}
              onClick={() => onDelete(selectedOffer)}
              disabled={working}
            >
              Delete selected offer
            </button>
          </div>
        )}
      </div>

      {selectedOffer && (
        <div className="preview-card">
          <div className="preview-label">Quick preview</div>
          {selectedOffer.image && (
            <div className="img-preview" style={{ marginBottom: 12 }}>
              <img src={selectedOffer.image} alt={selectedOffer.title} />
            </div>
          )}
          <div className="preview-kv">
            <span className="preview-key">Discount</span>
            <span className="preview-val" style={{ color: "var(--gold)", fontWeight: 700 }}>
              {selectedOffer.discount || "—"}
            </span>
          </div>
          <div className="preview-kv">
            <span className="preview-key">Audience</span>
            <span className="preview-val">{selectedOffer.audience || "—"}</span>
          </div>
          <div className="preview-kv">
            <span className="preview-key">Ends</span>
            <span className="preview-val">
              {selectedOffer.endDate ? selectedOffer.endDate.slice(0, 10) : "—"}
            </span>
          </div>
        </div>
      )}
    </div>

    {/* Form */}
    <div className="form-panel">
      <div className="form-header">
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span className={`form-badge ${selectedOffer ? "editing" : "new"}`}>
            {selectedOffer ? "editing" : "new offer"}
          </span>
          <span className="form-title">
            {selectedOffer ? selectedOffer.title : "Create offer"}
          </span>
        </div>
        <div className="form-header-right">
          <button className="btn btn-ghost btn-sm" onClick={onReset}>Discard</button>
          <button className="btn btn-primary" onClick={onSubmit} disabled={working}>
            {working ? "Saving…" : selectedOffer ? "Update offer" : "Publish offer"}
          </button>
        </div>
      </div>

      <div className="form-body">
        <div className="form-section-label" style={{ marginTop: 0, paddingTop: 0, borderTop: "none" }}>
          Offer details
        </div>
        <div className="field-grid">
          <label>
            <span className="field-label">Title</span>
            <input className="field-input" value={offerForm.title} onChange={(e) => onInputChange(e, "title")} placeholder="Offer title…" />
          </label>
          <label>
            <span className="field-label">Slug</span>
            <input className="field-input" value={offerForm.slug} onChange={(e) => onInputChange(e, "slug")} placeholder="summer-deal" />
          </label>
          <label>
            <span className="field-label">Discount</span>
            <input className="field-input" value={offerForm.discount} onChange={(e) => onInputChange(e, "discount")} placeholder="50% OFF" />
          </label>
          <label>
            <span className="field-label">End date</span>
            <input className="field-input" type="date" value={offerForm.endDate} onChange={(e) => onInputChange(e, "endDate")} />
          </label>
          <label className="span-2">
            <span className="field-label">Audience</span>
            <input className="field-input" value={offerForm.audience} onChange={(e) => onInputChange(e, "audience")} placeholder="General Public" />
          </label>
          <label className="span-2">
            <span className="field-label">Description</span>
            <textarea className="field-input field-textarea" value={offerForm.description} onChange={(e) => onInputChange(e, "description")} rows={4} placeholder="Describe the offer…" />
          </label>
        </div>

        <div className="form-section">
          <div className="form-section-label">Media</div>
          <ImageField
            label="Offer Image"
            value={offerForm.image}
            onChange={(val) => setOfferForm((c) => ({ ...c, image: val }))}
          />
        </div>
      </div>
    </div>
  </div>
);

// ── Main Dashboard ───────────────────────────────────────────
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

  const fetchJson = async (path, options = {}) => {
    const token = localStorage.getItem("token");
    const response = await fetch(path, {
      ...options,
      cache: "no-store",
      headers: { ...options.headers, Authorization: `Bearer ${token}` },
    });
    if (!response.ok) throw new Error((await response.json()).error || "Request failed");
    return response.json();
  };

  const loadData = useCallback(async () => {
    setLoading(true); setError("");
    try {
      const [postsData, offersData] = await Promise.all([
        fetchJson("/api/posts"),
        fetchJson("/api/offers"),
      ]);
      setPosts(postsData); setOffers(offersData);
    } catch (e) { setError(e.message); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => {
    const init = async () => {
      const token = localStorage.getItem("token");
      if (!token) { router.push("/admin"); return; }
      const res = await fetch("/api/admin/verify", {
        cache: "no-store",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        router.push("/admin");
        return;
      }
      await loadData();
    };
    init();
  }, [router, loadData]);

  // Stable change handlers — one per form so the section components don't
  // need to know about the setter directly for text fields.
  const handlePostInput = useCallback((e, key) => {
    setPostForm((c) => ({ ...c, [key]: e.target.value }));
  }, []);

  const handleOfferInput = useCallback((e, key) => {
    setOfferForm((c) => ({ ...c, [key]: e.target.value }));
  }, []);

  const parseTags = (v) => v.split(",").map((t) => t.trim()).filter(Boolean);

  const submitPost = async () => {
    setWorking(true); setError("");
    try {
      const content = JSON.parse(postForm.contentJson);
      const payload = { ...postForm, tags: parseTags(postForm.tags), content };
      if (selectedPost) {
        await fetchJson(`/api/posts/${selectedPost.slug}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        await fetchJson("/api/posts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }
      await loadData(); resetPostForm();
    } catch (e) { setError(e.message); }
    finally { setWorking(false); }
  };

  const submitOffer = async () => {
    setWorking(true); setError("");
    try {
      if (selectedOffer) {
        await fetchJson(`/api/offers/${selectedOffer.slug}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(offerForm),
        });
      } else {
        await fetchJson("/api/offers", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(offerForm),
        });
      }
      await loadData(); resetOfferForm();
    } catch (e) { setError(e.message); }
    finally { setWorking(false); }
  };

  const resetPostForm = () => { setPostForm(emptyPostForm); setSelectedPost(null); };
  const resetOfferForm = () => { setOfferForm(emptyOfferForm); setSelectedOffer(null); };

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
      contentJson: JSON.stringify(
        post.content || [{ heading: "Introduction", body: "" }],
        null,
        2,
      ),
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
    if (!confirm(`Delete "${post.title}"? This cannot be undone.`)) return;
    setWorking(true);
    try { await fetchJson(`/api/posts/${post.slug}`, { method: "DELETE" }); await loadData(); resetPostForm(); }
    catch (e) { setError(e.message); }
    finally { setWorking(false); }
  };

  const deleteOffer = async (offer) => {
    if (!confirm(`Delete offer "${offer.title}"?`)) return;
    setWorking(true);
    try { await fetchJson(`/api/offers/${offer.slug}`, { method: "DELETE" }); await loadData(); resetOfferForm(); }
    catch (e) { setError(e.message); }
    finally { setWorking(false); }
  };

  const handleLogout = async () => {
    localStorage.removeItem("token"); localStorage.removeItem("user");
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
  };

  return (
    <div className="admin-root">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <header className="topbar max-w-7xl mx-auto ">
        

      
        <div className="topbar-brand">
          <span className="brand-dot" />
          <span className="brand-name">Aptech</span>
          <span className="brand-sep">·</span>
          <span className="brand-section">Admin Portal</span>
        </div>
        <div className="topbar-actions">
          <div className="tab-nav">
            <button className={`tab-btn ${activeTab === "posts" ? "active" : ""}`} onClick={() => setActiveTab("posts")}>Posts</button>
            <button className={`tab-btn ${activeTab === "offers" ? "active" : ""}`} onClick={() => setActiveTab("offers")}>Offers</button>
          </div>
          <button className="btn btn-sm" onClick={loadData} disabled={working}>Refresh</button>
          <button className="btn btn-outline btn-sm" onClick={handleLogout}>Logout</button>
        </div>
      
      </header>

      <main className="page-content">
        <div className="page-header">
          <div>
            <div className="page-eyebrow">
              <span className="eyebrow-dot" />
              Content Management
            </div>
            <h1 className="page-title">
              {activeTab === "posts" ? <><span>Blog</span> Posts</> : <>Active <span>Offers</span></>}
            </h1>
            <p className="page-sub">
              {activeTab === "posts"
                ? `${posts.length} post${posts.length !== 1 ? "s" : ""} · Select from the list to edit, or fill the form to create new`
                : `${offers.length} active offer${offers.length !== 1 ? "s" : ""} · Manage campaign content and promotions`}
            </p>
          </div>
          {/* <span className="status-live"><span className="live-dot" />Live</span> */}
        </div>

        {error && <div className="error-banner"><span>⚠</span>{error}</div>}

        {loading ? (
          <div className="loading-state">
            <div className="loading-dots">
              <div className="dot" /><div className="dot" /><div className="dot" />
            </div>
            Loading content…
          </div>
        ) : activeTab === "posts" ? (
          <PostsSection
            posts={posts}
            selectedPost={selectedPost}
            postForm={postForm}
            working={working}
            onSelect={handlePostSelect}
            onInputChange={handlePostInput}
            onSubmit={submitPost}
            onReset={resetPostForm}
            onDelete={deletePost}
            setPostForm={setPostForm}
          />
        ) : (
          <OffersSection
            offers={offers}
            selectedOffer={selectedOffer}
            offerForm={offerForm}
            working={working}
            onSelect={handleOfferSelect}
            onInputChange={handleOfferInput}
            onSubmit={submitOffer}
            onReset={resetOfferForm}
            onDelete={deleteOffer}
            setOfferForm={setOfferForm}
          />
        )}
      </main>
    </div>
  );
};

export default AdminDashboardClient;