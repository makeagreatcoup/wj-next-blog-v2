'use client'
import { useState, useEffect } from 'react';
import redis from '@/plugins/redis'; // 假设你已经正确安装并导入了redis库

const client = redis

// 处理连接事件和错误处理
client.on('connect', () => console.log('Connected to Redis'));
client.on('error', (error) => console.error('Error connecting to Redis', error));

const ViewCounter = ({ slug, noCount = false, showCount = true }:{slug:string,noCount?:boolean,showCount?:boolean}) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const incrementView = async () => {
      try {
        await new Promise((resolve, reject) => {
          client.hincrby('page_views', slug, 1, (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          });
        });
      } catch (error) {
        console.error("An error occurred while incrementing the view count:", error);
      }
    };

    if (!noCount) {
      incrementView();
    }

    return () => {
      // 清理资源，在组件卸载时关闭 Redis 连接
      client.quit();
    };
  }, [slug, noCount]);

  useEffect(() => {
    const getViews = async () => {
      try {
        const viewsValue = await new Promise<string>((resolve, reject) => {
          client.hget('page_views', slug, (error, result: unknown) => {
            if (error) {
              reject(error);
            } else if (typeof result === 'string') {
              resolve(result);
            } else {
              // 当result不是预期类型时处理错误或提供默认值
              console.error('Unexpected data type returned from Redis for page views count');
              resolve("0");
            }
          });
        });
        
        setViews(parseInt(viewsValue || "0", 10));
      } catch (error) {
        console.error(
          "An error occurred while getting the view count:",
          error
        );
      }
    };

    getViews();

    // 可能不需要清理函数，因为视图计数通常在每次渲染时都要更新
  }, [slug]);

  // ... 其他逻辑不变 ...
  return <></>
};

export default ViewCounter;