import { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  //&date_gte=${startDate}&date_lte=${endDate}
  const fetchPosts = async () => {
    const query = `/posts?category.name=${category}`;
    const response = await axios.get(`http://localhost:1337${query}`);
    setPosts(response.data);
  };

  useEffect(() => {
    fetchPosts();
  }, [category, startDate, endDate]);

  return (
    <div>
      {/* Add category dropdown and date range filter */}
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="Agriculture">Agriculture</option>
        <option value="Child Education">Child Education</option>
        {/* Add the other categories */}
      </select>
      <input type="date" onChange={(e) => setStartDate(e.target.value)} />
      <input type="date" onChange={(e) => setEndDate(e.target.value)} />

      <div className="post-list">
        {posts.map((post: any) => (
          <div key={post.id} className="post-item">
            <h3>{post.title}</h3>
            <img src={post.images[0].url} alt={post.title} />
            <p>{post.description.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;