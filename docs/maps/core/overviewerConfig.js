var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "image": {
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "tileSize": 384,
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "name": "Daytime Render",
            "base": "",
            "showlocationmarker": true,
            "isOverlay": false,
            "maxZoom": 10,
            "minZoom": 0,
            "path": "day",
            "imgextension": "png",
            "zoomLevels": 10,
            "spawn": [
                80,
                96,
                192
            ],
            "world": "Core01",
            "poititle": "Markers",
            "center": [
                80,
                96,
                192
            ],
            "last_rendertime": 1599404280,
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "defaultZoom": 1
        }
    ],
    "map": {
        "controls": {
            "mapType": true,
            "overlays": true,
            "pan": true,
            "spawn": true,
            "coordsBox": true,
            "compass": true,
            "zoom": true
        },
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1599404485"
    },
    "worlds": [
        "Core01"
    ]
};
