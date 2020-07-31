var overviewerConfig = {
    "map": {
        "controls": {
            "compass": true,
            "zoom": true,
            "coordsBox": true,
            "overlays": true,
            "pan": true,
            "spawn": true,
            "mapType": true
        },
        "cacheTag": "1596182482",
        "debug": true,
        "north_direction": "lower-left"
    },
    "CONST": {
        "UPPERLEFT": 0,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1
    },
    "tilesets": [
        {
            "name": "Daytime Render",
            "minZoom": 0,
            "path": "day",
            "isOverlay": false,
            "showlocationmarker": true,
            "center": [
                80,
                96,
                192
            ],
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "maxZoom": 10,
            "base": "",
            "zoomLevels": 10,
            "last_rendertime": 1596182280,
            "defaultZoom": 1,
            "world": "Core01",
            "spawn": [
                80,
                96,
                192
            ],
            "poititle": "Markers"
        }
    ],
    "worlds": [
        "Core01"
    ]
};
