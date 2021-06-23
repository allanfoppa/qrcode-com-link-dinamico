import React from 'react'
import PropTypes from 'prop-types'

export const Paragraph = ({children, styling}) => {
	return(
		<p
			className={`tw-text-base tw-text-gray-900 ${styling ? styling: ''}`}
		>
			{children}
		</p>
	)
}

Paragraph.propTypes = {
	children: PropTypes.node.isRequired,
	styling: PropTypes.string
}

export const Span = ({children, styling}) => {
	return(
		<span
			className={`tw-text-sm tw-text-gray-800 ${styling ? styling: ''}`}
		>
			{children}
		</span>
	)
}

Span.propTypes = {
	children: PropTypes.node.isRequired,
	styling: PropTypes.string
}