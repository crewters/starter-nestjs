import { Injectable } from '@nestjs/common';

import { connection } from 'src/db.config';

@Injectable()
export class PostsService {

  async getAllPosts(offset): Promise<{}> {
    return new Promise((res, rej) => {
      connection.query(
        `SELECT * from POSTS ORDER BY time DESC LIMIT 1 OFFSET ${offset};`,
        function (error, results, fields) {
          if (error) throw error;
          results = results.rows.map((result) => {
            return Object.assign({}, result);
          });
          res(results);
        },
      );
    });
  }

  async getPostById(id): Promise<{}> {
    return new Promise((res, rej) => {
      connection.query(
        `SELECT * from POSTS WHERE ID='${id["id"]}' LIMIT 1;`,
        function (error, results, fields) {
          if (error) throw error;
          results = results.rows.map((result) => {
            return Object.assign({}, result);
          });
          res(results);
        },
      );
    });
  }

  async addLikeById(id): Promise<{}> {
    return new Promise((res, rej) => {
      connection.query(
        `UPDATE posts SET likes=likes + 1 WHERE ID='${id["id"]}';`,
        function (error, results, fields) {
          if (error) throw error;
          results = results.rows.map((result) => {
            return Object.assign({}, result);
          });
          res(results);
        },
      );
    });
  }

  async removeLikeById(id): Promise<{}> {
    return new Promise((res, rej) => {
      connection.query(
        `UPDATE posts SET likes=likes - 1 WHERE ID='${id["id"]}';`,
        function (error, results, fields) {
          if (error) throw error;
          results = results.rows.map((result) => {
            return Object.assign({}, result);
          });
          res(results);
        },
      );
    });
  }

  async addCommentById(id): Promise<{}> {
    return new Promise((res, rej) => {
      connection.query(
        `UPDATE posts SET comments=comments + 1 WHERE ID='${id["id"]}';`,
        function (error, results, fields) {
          if (error) throw error;
          results = results.rows.map((result) => {
            return Object.assign({}, result);
          });
          res(results);
        },
      );
    });
  }

  async removeCommentById(id): Promise<{}> {
    return new Promise((res, rej) => {
      connection.query(
        `UPDATE posts SET comments=comments - 1 WHERE ID='${id["id"]}';`,
        function (error, results, fields) {
          if (error) throw error;
          results = results.rows.map((result) => {
            return Object.assign({}, result);
          });
          res(results);
        },
      );
    });
  }

  createPost(post): any {
    return new Promise((res, rej) => {
      connection.query(
        `INSERT INTO posts (userId, postName, avatar, image, likes, comments, time) VALUES
        ('${post.userId}', '${post.postName}', '${post.avatar}', '${post.image}', ${post.likes}, '${post.comments}', now());`,
        function (error, results, fields) {
          if (error) throw error;
          results = results.rows.map((result) => {
            return Object.assign({}, result);
          });
          res(results);
        },
      );
    });
  }

  async deletePostById(id): Promise<{}> {
    return new Promise((res, rej) => {
      connection.query(
        `DELETE FROM posts WHERE id='${id["id"]}';`,
        function (error, results, fields) {
          if (error) throw error;
          results = results.rows.map((result) => {
            return Object.assign({}, result);
          });
          res(results);
        },
      );
    });
  }

}
