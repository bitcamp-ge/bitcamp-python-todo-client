import requests

class TaskClient:
    BASE_URL = "http://127.0.0.1:8000/tasks/"

    def create_task(self, **task):
        return requests.post(f"{TaskClient.BASE_URL}", json=task).json()

    def get_task(self, task_id):
        return requests.get(f"{TaskClient.BASE_URL}{task_id}").json()

    def get_all_tasks(self):
        return requests.get(f"{TaskClient.BASE_URL}").json()

    def update_task(self, task_id, **task):
        return requests.put(f"{TaskClient.BASE_URL}{task_id}", json=task).json()

    def delete_task(self, task_id):
        return requests.delete(f"{TaskClient.BASE_URL}{task_id}").json()

client = TaskClient()

# print(client.create_task(id=23, title="New task 23", completed=False))
# print(client.get_all_tasks())
# print(client.get_task(22))
# print(client.update_task(6, id=6, title="Wash the car", completed=1))
# print(client.delete_task(17))
