export default function Picture({ image, imageAlt }) {
  return (
    <picture>
      <source srcSet={`${image}-desktop@2x.jpg 2x`} media="(min-width: 1280px)" />
      <source srcSet={`${image}-desktop.jpg 2x`} media="(min-width: 1280px)" />
      <source srcSet={`${image}-tablet@2x.jpg 2x`} media="(min-width: 768px)" />
      <source srcSet={`${image}-tablet.jpg`} media="(min-width: 768px)" />
      <source srcSet={`${image}-mobile@2x.jpg 2x`} />
      <img src={`${image}-mobile.jpg`} className="shadow-default" alt={imageAlt} />
    </picture>
  )
}
