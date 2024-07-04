class Solution:
    def subdomainVisits(self, cpdomains: List[str]) -> List[str]:
        visited = {}

        for domain in cpdomains:
            times = int(domain.split(" ")[0])
            subdomains = domain.split(" ")[1].split(".")

            for i in range(len(subdomains)):
                subdomain = ".".join(subdomains[i:])
                visited[subdomain] = visited.get(subdomain, 0) + times

        return [f"{count} {subdomain}" for subdomain, count in visited.items()]
