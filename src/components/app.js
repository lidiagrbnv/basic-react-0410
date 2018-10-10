import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import MomentLocaleUtils, {
  formatDate,
  parseDate
} from 'react-day-picker/moment'
import 'moment/locale/en-gb'
import Select from 'react-select'
import ArticleList from './article-list'
import ArticleChart from './articles-chart'
import UserForm from './user-form'
import articles from '../fixtures'

class App extends Component {
  state = {
    selected: null
  }
  render() {
    return (
      <div>
        <UserForm />
        <Select
          options={this.options}
          value={this.state.selected}
          onChange={this.handleSelectionChange}
          isMulti
        />
        <DayPickerInput
          formatDate={formatDate}
          parseDate={parseDate}
          format="LL"
          placeholder={`${formatDate(new Date(), 'LL', 'en-gb')}`}
          dayPickerProps={{
            locale: 'en-gb',
            localeUtils: MomentLocaleUtils
          }}
        />
        <ArticleList articles={articles} ref={this.setArticleListRef} />
        <ArticleChart articles={articles} />
      </div>
    )
  }

  handleSelectionChange = (selected) => this.setState({ selected })

  get options() {
    return articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  setArticleListRef = (ref) => {
    console.log('---', 'article list ref', ref, findDOMNode(ref))
  }
}

export default App
