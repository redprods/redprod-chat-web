
import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

import styles from './Input.module.scss'
import { Field } from 'formik'

export const Input = ({ label, image, types }) => {
  return <div className={styles.group}>
  <Field name={types} type={types} required />
  <span className={styles.bar}></span>
  <label>{label}</label>
    <Image src={image} alt="" />
</div>
}
Input.propTypes = {
  label: PropTypes.string.isRequired,
  image: PropTypes.string,
  types: PropTypes.string.isRequired
}
