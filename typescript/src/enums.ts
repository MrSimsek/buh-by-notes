// Enums
// By default it starts with zero (PENDING = 0), it can be overridden by asigning a starter value to first one (PENDING = 1)
enum StatusCode {
  PENDING,
  ERROR,
  OK,
}

let fetchStatus: StatusCode = StatusCode.OK;
