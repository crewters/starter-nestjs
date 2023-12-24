import { Injectable } from '@nestjs/common';

import { connection } from 'src/db.config';

@Injectable()
export class LikesService {

  async getAllLikes(): Promise<{}> {
    return new Promise((res, rej) => {
      connection.query(
        `SELECT * from likes LIMIT 20;`,
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

  async getLikeById(id): Promise<{}> {
    return new Promise((res, rej) => {
      connection.query(
        `SELECT * from likes WHERE postid='${id["id"]}' LIMIT 10;`,
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

  createLike(like): any {
    return new Promise((res, rej) => {
      connection.query(
        `INSERT INTO likes (userId, postid, avatar, time) VALUES
        ('${like.userid}', '${like.postid}', '${like.avatar}', now());`,
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

  async deleteLikeById(id): Promise<{}> {
    return new Promise((res, rej) => {
      connection.query(
        `DELETE FROM likes WHERE postid='${id["id"]}';`,
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
