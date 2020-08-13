var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "world": "Core01",
            "name": "Daytime Render",
            "imgextension": "png",
            "isOverlay": false,
            "base": "",
            "poititle": "Markers",
            "showlocationmarker": true,
            "north_direction": 0,
            "center": [
                80,
                96,
                192
            ],
            "zoomLevels": 10,
            "path": "day",
            "defaultZoom": 1,
            "last_rendertime": 1597316280,
            "minZoom": 0,
            "maxZoom": 10,
            "bgcolor": "#1a1a1a",
            "spawn": [
                80,
                96,
                192
            ]
        }
    ],
    "CONST": {
        "tileSize": 384,
        "UPPERLEFT": 0,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png"
        },
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1
    },
    "map": {
        "debug": true,
        "controls": {
            "zoom": true,
            "mapType": true,
            "compass": true,
            "spawn": true,
            "overlays": true,
            "pan": true,
            "coordsBox": true
        },
        "north_direction": "lower-left",
        "cacheTag": "1597316483"
    }
};
