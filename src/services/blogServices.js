import axiosInstance from "@/utils/axiosInstance";

export const blogServices = {
  getBlogData(query = "") {
    return axiosInstance.get(`/blogs${query}`);
  },
  getBlogBySlug(slug = "") {
    return axiosInstance.get(`/blogs/${slug}`);
  },
  getBlogCategories(query = "") {
    return axiosInstance.get(`/blog-categories${query}`);
  },
  getBlogCategorySlug(slug = "") {
    return axiosInstance.get(`blog-categories/${slug}`);
  },
  getBlogTags(query = "") {
    return axiosInstance.get(`/blog-tags/${query}`);
  },
  getBlogTagBySlug(slug = "") {
    return axiosInstance.get(`blog-tags/${slug}`);
  },
};
