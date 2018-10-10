import React, { PureComponent } from 'react'
import CommentList from './comment-list'

class Article extends PureComponent {
  state = {
    shouldShowComments: false
  }

  render() {
    console.log('---', 'rendering article')
    const { article, isOpen } = this.props
    const text = isOpen ? 'close' : 'open'

    return (
      <div>
        <h3 ref={this.setTitleRef}>{article.title}</h3>
        <button onClick={this.onButtonClick}>{text}</button>
        {this.body}
      </div>
    )
  }

  setTitleRef = (ref) => {
    console.log('---', 'article title', ref)
  }

  onButtonClick = () => this.props.toggleOpen(this.props.article.id)

  onCommentButtonClick = () =>
    this.setState({ shouldShowComments: !this.state.shouldShowComments })

  get body() {
    const { isOpen, article } = this.props
    const commentText = this.state.shouldShowComments
      ? 'Hide comments'
      : 'Open comments'
    if (!isOpen) return null
    return (
      <section>
        {article.text}
        <div>
          <button onClick={this.onCommentButtonClick}>{commentText}</button>
          <CommentList
            article={article}
            shouldShowComments={this.state.shouldShowComments}
          />
        </div>
      </section>
    )
  }
}

export default Article
