var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png"
        },
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "north_direction": 0,
            "last_rendertime": 1598525880,
            "name": "Daytime Render",
            "showlocationmarker": true,
            "poititle": "Markers",
            "world": "Core01",
            "spawn": [
                80,
                96,
                192
            ],
            "center": [
                80,
                96,
                192
            ],
            "bgcolor": "#1a1a1a",
            "zoomLevels": 10,
            "imgextension": "png",
            "base": "",
            "minZoom": 0,
            "defaultZoom": 1,
            "path": "day",
            "isOverlay": false,
            "maxZoom": 10
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "spawn": true,
            "zoom": true,
            "mapType": true,
            "pan": true,
            "coordsBox": true,
            "compass": true,
            "overlays": true
        },
        "debug": true,
        "cacheTag": "1598526086"
    },
    "worlds": [
        "Core01"
    ]
};
