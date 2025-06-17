/*
2
4
7


A
AB
ABC
ABCD
A
AB
ABC
ABCD
ABCDE
ABCDEF
ABCDEFG


*/


#include <bits/stdc++.h>
using namespace std;

int main(){
    ios_base::sync_with_stdio(0);
    cin.tie(0); cout.tie(0);

    int t;
    cin>>t;

    while(t--){
        int n;
        cin>>n;

        for(int i=0;i<n;i++){
            for(int j=0;j<=i;j++){
                cout<<(char)('A'+j);
            }
            cout<<"\n";
        }
    }
}