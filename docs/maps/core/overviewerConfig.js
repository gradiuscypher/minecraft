var overviewerConfig = {
    "CONST": {
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "tileSize": 384
    },
    "tilesets": [
        {
            "zoomLevels": 10,
            "center": [
                80,
                96,
                192
            ],
            "path": "day",
            "north_direction": 0,
            "poititle": "Markers",
            "imgextension": "png",
            "maxZoom": 10,
            "name": "Daytime Render",
            "showlocationmarker": true,
            "isOverlay": false,
            "base": "",
            "last_rendertime": 1598147880,
            "spawn": [
                80,
                96,
                192
            ],
            "bgcolor": "#1a1a1a",
            "world": "Core01",
            "minZoom": 0,
            "defaultZoom": 1
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "overlays": true,
            "compass": true,
            "coordsBox": true,
            "mapType": true
        },
        "cacheTag": "1598148087",
        "debug": true
    },
    "worlds": [
        "Core01"
    ]
};
