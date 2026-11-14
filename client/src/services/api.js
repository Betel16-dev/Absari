export async function apiRequest(path, options = {}) {
  const response = await fetch(`/api/${path.replace(/^\/+/, '')}`, options);

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
}
