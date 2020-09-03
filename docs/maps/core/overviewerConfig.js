var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "mapDivId": "mcmap",
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "image": {
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "UPPERLEFT": 0
    },
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1599152485",
        "controls": {
            "pan": true,
            "spawn": true,
            "mapType": true,
            "zoom": true,
            "coordsBox": true,
            "overlays": true,
            "compass": true
        }
    },
    "tilesets": [
        {
            "minZoom": 0,
            "name": "Daytime Render",
            "maxZoom": 10,
            "last_rendertime": 1599152280,
            "isOverlay": false,
            "zoomLevels": 10,
            "showlocationmarker": true,
            "spawn": [
                80,
                96,
                192
            ],
            "path": "day",
            "north_direction": 0,
            "defaultZoom": 1,
            "base": "",
            "bgcolor": "#1a1a1a",
            "poititle": "Markers",
            "center": [
                80,
                96,
                192
            ],
            "world": "Core01",
            "imgextension": "png"
        }
    ]
};
