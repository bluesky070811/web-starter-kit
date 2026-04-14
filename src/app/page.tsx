"use client";

import { useState, useMemo } from "react";

interface User {
    id: number;
    name: string;
    email: string;
    department: string;
    status: "활성" | "비활성";
}

// 샘플 데이터
const SAMPLE_USERS: User[] = [
    { id: 1, name: "김철수", email: "kim@example.com", department: "개발팀", status: "활성" },
    { id: 2, name: "이영희", email: "lee@example.com", department: "디자인팀", status: "활성" },
    { id: 3, name: "박민준", email: "park@example.com", department: "개발팀", status: "비활성" },
    { id: 4, name: "정수진", email: "jung@example.com", department: "마케팅팀", status: "활성" },
    { id: 5, name: "최동욱", email: "choi@example.com", department: "개발팀", status: "활성" },
    { id: 6, name: "오세라", email: "oh@example.com", department: "HR팀", status: "활성" },
    { id: 7, name: "신재호", email: "shin@example.com", department: "영업팀", status: "비활성" },
    { id: 8, name: "허준영", email: "heo@example.com", department: "개발팀", status: "활성" },
];

export default function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const [departmentFilter, setDepartmentFilter] = useState("전체");
    const [statusFilter, setStatusFilter] = useState("전체");

    // 필터링 및 검색된 데이터
    const filteredUsers = useMemo(() => {
        return SAMPLE_USERS.filter((user) => {
            const matchesSearch =
                user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.email.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesDepartment =
                departmentFilter === "전체" || user.department === departmentFilter;

            const matchesStatus =
                statusFilter === "전체" || user.status === statusFilter;

            return matchesSearch && matchesDepartment && matchesStatus;
        });
    }, [searchTerm, departmentFilter, statusFilter]);

    // 부서 목록 추출
    const departments = ["전체", ...new Set(SAMPLE_USERS.map((u) => u.department))];
    const statuses = ["전체", "활성", "비활성"];

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-8">
                {/* 헤더 */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-foreground mb-2">
                        사용자 조회
                    </h1>
                    <p className="text-muted-foreground">
                        조직의 사용자 정보를 조회하고 관리합니다.
                    </p>
                </div>

                {/* 검색 및 필터 영역 */}
                <div className="bg-card border border-border rounded-lg p-6 mb-6 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* 검색 */}
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                검색 (이름 또는 이메일)
                            </label>
                            <input
                                type="text"
                                placeholder="검색어를 입력하세요..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                            />
                        </div>

                        {/* 부서 필터 */}
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                부서
                            </label>
                            <select
                                value={departmentFilter}
                                onChange={(e) => setDepartmentFilter(e.target.value)}
                                className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                            >
                                {departments.map((dept) => (
                                    <option key={dept} value={dept}>
                                        {dept}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* 상태 필터 */}
                        <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                                상태
                            </label>
                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                            >
                                {statuses.map((status) => (
                                    <option key={status} value={status}>
                                        {status}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* 결과 카운트 */}
                <div className="mb-4 text-sm text-muted-foreground">
                    총 <span className="font-semibold text-foreground">{filteredUsers.length}</span>명의 사용자가 있습니다.
                </div>

                {/* 테이블 */}
                <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-secondary border-b border-border">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                                        이름
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                                        이메일
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                                        부서
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">
                                        상태
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.length > 0 ? (
                                    filteredUsers.map((user) => (
                                        <tr
                                            key={user.id}
                                            className="border-b border-border hover:bg-secondary/50 transition-colors"
                                        >
                                            <td className="px-6 py-4 text-sm text-foreground font-medium">
                                                {user.name}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-foreground">
                                                {user.email}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-foreground">
                                                {user.department}
                                            </td>
                                            <td className="px-6 py-4 text-sm">
                                                <span
                                                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                                                        user.status === "활성"
                                                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                                                            : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                                                    }`}
                                                >
                                                    {user.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan={4}
                                            className="px-6 py-8 text-center text-muted-foreground"
                                        >
                                            검색 결과가 없습니다.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 푸터 */}
                <div className="mt-8 text-center text-sm text-muted-foreground">
                    <p>
                        이것은 조회용 스타터 킷의 예제입니다. 필요에 따라 수정하세요.
                    </p>
                </div>
            </div>
        </div>
    );
}
