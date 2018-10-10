import React, { Component } from 'react'
import Comment from './comment'

class CommentList extends Component {
  render() {
    const { article, shouldShowComments } = this.props
    const commentItems = article.comments.map((comment) => {
      return (
        <li key={comment.id}>
          <Comment comment={comment} />
        </li>
      )
    })

    if (!shouldShowComments) return null
    return (
      <div>
        <ul>{commentItems}</ul>
      </div>
    )
  }
}

export default CommentList
