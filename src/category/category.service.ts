import { Injectable } from '@nestjs/common';

import { connection } from 'src/db.config';

@Injectable()
export class CategoryService {

  async getAllCategories(): Promise<{}> {
    return new Promise((res, rej) => {
      connection.query(
        `SELECT * from categories LIMIT 20;`,
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

  async getCategoryById(id): Promise<{}> {
    return new Promise((res, rej) => {
      connection.query(
        `SELECT * from categories WHERE ID='${id["id"]}' LIMIT 1;`,
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

  createCategory(like): any {
    return new Promise((res, rej) => {
      connection.query(
        `INSERT INTO category (userId, postid, avatar, comments, time) VALUES
        ('${like.userId}', '${like.postid}', '${like.avatar}', '${like.comments}', now());`,
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

  async deleteCategoryById(id): Promise<{}> {
    return new Promise((res, rej) => {
      connection.query(
        `DELETE FROM category WHERE id='${id["id"]}';`,
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
