import React from 'react';
import styles from './styles.module.scss';

/**
 *
 * @param {Object} props
 * @return {Object} Img
 * @example { className, src, alt }
 */
export default function Img(props) {
  const { className, src, alt } = props;

  return <img className={`${className} ${styles.imgShadow} img-fluid`} src={src} alt={alt} />;
}
