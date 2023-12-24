import { Injectable } from '@nestjs/common';

import { connection } from 'src/db.config';

@Injectable()
export class NotificationsService {

  async getAllNotifications(): Promise<{}> {
    return new Promise((res, rej) => {
      connection.query(
        `SELECT * from notifications LIMIT 20;`,
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

  async getNotificationById(id): Promise<{}> {
    return new Promise((res, rej) => {
      connection.query(
        `SELECT * from notifications WHERE ID='${id["id"]}' LIMIT 1;`,
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

  createNotification(like): any {
    return new Promise((res, rej) => {
      connection.query(
        `INSERT INTO notification (userId, postid, avatar, comments, time) VALUES
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

  async deleteNotificationById(id): Promise<{}> {
    return new Promise((res, rej) => {
      connection.query(
        `DELETE FROM notifications WHERE id='${id["id"]}';`,
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
