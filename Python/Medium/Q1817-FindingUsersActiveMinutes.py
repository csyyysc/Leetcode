class Solution:
    def findingUsersActiveMinutes(self, logs: List[List[int]], k: int) -> List[int]:
        m = {}
        ans = [0] * k
        logs = sorted(logs, key=lambda x: x[0])

        for i in range(len(logs)):
            log_id, log_min = logs[i]
            if log_id in m:
                m[log_id].add(log_min)
            else:
                m[log_id] = set()
                m[log_id].add(log_min)

        for uam in m.values():
            ans[len(uam) - 1] += 1

        return ans
