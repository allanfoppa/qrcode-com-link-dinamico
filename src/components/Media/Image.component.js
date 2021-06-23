import React from 'react'
import PropTypes from 'prop-types'

const Image = ({src, alt, styling}) => <img loading="lazy" src={src} alt={alt} className={styling} />

Image.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	styling: PropTypes.string
}

export default Image