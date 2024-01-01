import { Injectable } from '@nestjs/common';
import { connection } from 'src/db.config';

@Injectable()
export class UsersService {
  getHello(): string {
    return 'Hello World!';
  }

  async getProfilePicById(id): Promise<{}> {
    return new Promise((res, rej) => {
      connection.query(
        `SELECT * from users WHERE ID='${id["id"]}' LIMIT 20;`,
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


  createProfilePic(user): any {
    return new Promise((res, rej) => {
      connection.query(
        `INSERT INTO users (userId, avatar) VALUES
        ('${user.userId}', '${user.avatar}');`,
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

  async deleteProfilePicByID(id): Promise<{}> {
    return new Promise((res, rej) => {
      connection.query(
        `DELETE FROM users WHERE id='${id["id"]}';`,
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
