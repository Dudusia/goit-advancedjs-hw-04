export const createGalleryCardTemplate = ({
  tags: alt,
  largeImageURL: src,
  webformatURL: miniSrc,
  likes: likes,
  views: views,
  comments: comments,
  downloads: downloads,
}) => {
  return `
    <li class="gallery-item">
        <a href="${src}" class="gallery-link">
            <img src="${miniSrc}" alt="${alt}" width="360" height="200" class="gallery-image">
        </a>
        <div class="gallery-item-stats">
            <p class="gallery-item-description"><span class="gallery-item-property">Views</span><br>${views}</p>
            <p class="gallery-item-description"><span class="gallery-item-property">Likes</span><br>${likes}</p>
            <p class="gallery-item-description"><span class="gallery-item-property">Comments</span><br>${comments}</p>
            <p class="gallery-item-description"><span class="gallery-item-property">Downloads</span><br>${downloads}</p>
        </div>
    </li>
  `;
};
