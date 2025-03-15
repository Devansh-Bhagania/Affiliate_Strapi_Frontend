"use client"
import AboutUs from '@/app/components/AboutUs'
import BlogFlex from '@/app/components/BlogFlex'
import Categories from '@/app/components/Categories'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import Landing2 from '@/app/components/Landing2'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import data from '../../../data.json'  // Adjust the path as necessary

const ClientPage = () => {
  const { category, slug } = useParams();
  console.log(category, slug);

  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  const fetchdata = async () => {
    setLoading(true);
    // Simulate data fetching from a local JSON file
    setArticles(data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  console.log(articles);

  return (
    <>
      <Header />
      <Categories />
      <Landing2 data={slug} />
      <BlogFlex title="ELECTRONICS" />
      <BlogFlex title="ELECTRONICS" article={6} />
      <BlogFlex title="ELECTRONICS" article={6} />
      <BlogFlex title="MOBILE PHONES" article={6} />
      <AboutUs />
      <Footer />
    </>
  );
};

export default ClientPage;
