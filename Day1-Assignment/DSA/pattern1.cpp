/*
1
2 2

**
**


2
4 4
4 4



****
*  *
*  *
****
****
*  *
*  *
****

*/

4 4


* * * *
*     *
*     *
* * * *


#include <bits/stdc++.h>
using namespace std;

int main(){
    ios_base::sync_with_stdio(0);
    cin.tie(0); cout.tie(0);

    int t;
    cin>>t;

    while(t--){
        int n,m;
        cin>>n>>m;
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                if(i==0 || i==(n-1) || j==0 || j==(m-1))
                    cout<<"*";
                else
                    cout<<" ";
            }
            cout<<"\n";
        }
    }
}