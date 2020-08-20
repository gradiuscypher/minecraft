var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "zoomLevels": 10,
            "world": "Core01",
            "path": "day",
            "maxZoom": 10,
            "showlocationmarker": true,
            "poititle": "Markers",
            "isOverlay": false,
            "name": "Daytime Render",
            "last_rendertime": 1597942680,
            "north_direction": 0,
            "minZoom": 0,
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "spawn": [
                80,
                96,
                192
            ],
            "imgextension": "png",
            "base": "",
            "center": [
                80,
                96,
                192
            ]
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "controls": {
            "overlays": true,
            "mapType": true,
            "pan": true,
            "coordsBox": true,
            "spawn": true,
            "zoom": true,
            "compass": true
        },
        "cacheTag": "1597942888",
        "north_direction": "lower-left",
        "debug": true
    }
};
