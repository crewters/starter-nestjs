import { Injectable } from '@nestjs/common';

import { connection } from 'src/db.config';

@Injectable()
export class CommentsService {

  async getAllComments(): Promise<{}> {
    return new Promise((res, rej) => {
      connection.query(
        `SELECT * from comments LIMIT 20;`,
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

  async getCommentById(id): Promise<{}> {
    return new Promise((res, rej) => {
      connection.query(
        `SELECT * from comments WHERE ID='${id["id"]}' LIMIT 1;`,
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

  async getCommentByPostId(id): Promise<{}> {
    return new Promise((res, rej) => {
      connection.query(
        `SELECT * from comments WHERE postid='${id["id"]}' LIMIT 200;`,
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

  async deleteAllCommentsByPostId(id): Promise<{}> {
    return new Promise((res, rej) => {
      connection.query(
        `DELETE from comments WHERE postid='${id["id"]}';`,
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

  createComment(comment): any {
    return new Promise((res, rej) => {
      connection.query(
        `INSERT INTO comments (userId, postid, avatar, comments, time) VALUES
        ('${comment.userId}', '${comment.postid}', '${comment.avatar}', '${comment.comments}', now());`,
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

  async deleteCommentById(id): Promise<{}> {
    return new Promise((res, rej) => {
      connection.query(
        `DELETE FROM comments WHERE id='${id["id"]}';`,
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
