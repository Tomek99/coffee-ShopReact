import React from 'react'
import '../styles/BlogsSection.scss'
import Header from './Header'
import LatestBlog from './LatestBlog'
import { stockBlog } from '../data/Data'

function BlogsSection() {
    return (
        <div className='BlogsSectionn' id='blogsSection'>
            <Header firstWord="our" secondWord="blogs" />
            <div className='blogs'>
                {stockBlog.map((item) => <LatestBlog url={item.imageUrl} id={item.id} title={item.title} text={item.text} addedBy={item.addedBy} />)}
            </div>
        </div>
    )
}

export default BlogsSection