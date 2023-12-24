import { Injectable } from '@nestjs/common';

import { connection } from 'src/db.config';

@Injectable()
export class MessagesService {

  async getAllMessages(): Promise<{}> {
    return new Promise((res, rej) => {
      connection.query(
        `SELECT * from messages LIMIT 20;`,
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

  async getMessageById(id): Promise<{}> {
    return new Promise((res, rej) => {
      connection.query(
        `SELECT * from messages WHERE ID='${id["id"]}' LIMIT 1;`,
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

  createMessage(like): any {
    return new Promise((res, rej) => {
      connection.query(
        `INSERT INTO messages (userId, postid, avatar, comments, time) VALUES
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

  async deleteMessageById(id): Promise<{}> {
    return new Promise((res, rej) => {
      connection.query(
        `DELETE FROM messages WHERE id='${id["id"]}';`,
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
