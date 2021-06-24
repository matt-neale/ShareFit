const BASE_URL = `http://localhost:3000/api/v1`;

export const Workout = {
  index() {
    return fetch(`${BASE_URL}/workouts`).then((res) => {
      console.log(res);
      return res.json();
    });
  },

  create(params) {
    return fetch(`${BASE_URL}/workouts`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },
  show(id) {
    return fetch(`${BASE_URL}/workouts/${id}`).then((res) => res.json());
  },
  update(id, params) {
    return fetch(`${BASE_URL}/workouts/${id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },
  destroy(id) {
    return fetch(`${BASE_URL}/workouts/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
  },
};

//Sign In AJAX helper
export const Session = {
  create(params) {
    return fetch(`${BASE_URL}/session`, {
      method: "POST",
      credentials: "include", //need this for cookies to be allowed to be sent cross-origin
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },
  currentUser() {
    return fetch(`${BASE_URL}/current_user`, {
      credentials: "include", // We need to include a session in a request so we can fetch that particular user
    }).then((res) => res.json());
  },
  destroy() {
    return fetch(`${BASE_URL}/session`, {
      method: "DELETE",
      credentials: "include",
    }).then((res) => res.json());
  },
};

export const User = {
  current() {
    return fetch(`${BASE_URL}/users/current`, {
      credentials: "include",
    }).then((res) => res.json());
  },
  create(params) {
    return fetch(`${BASE_URL}/users`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: params }),
    }).then((res) => res.json());
  },
};

export const Comment = {
  create(workout_id, params) {
    return fetch(`${BASE_URL}/workouts/${workout_id}/comments`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },
  destroy(id) {
    return fetch(`${BASE_URL}/comments/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
  },
};
export const Exercise = {
  create(workout_id, params) {
    return fetch(`${BASE_URL}/workouts/${workout_id}/exercises`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then((res) => res.json());
  },
  destroy(id) {
    return fetch(`${BASE_URL}/exercises/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
  },
};
