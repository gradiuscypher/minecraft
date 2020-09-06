var overviewerConfig = {
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "zoom": true,
            "spawn": true,
            "compass": true,
            "pan": true,
            "overlays": true,
            "mapType": true,
            "coordsBox": true
        },
        "debug": true,
        "cacheTag": "1599426090"
    },
    "CONST": {
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "UPPERLEFT": 0,
        "image": {
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "UPPERRIGHT": 1
    },
    "tilesets": [
        {
            "imgextension": "png",
            "bgcolor": "#1a1a1a",
            "poititle": "Markers",
            "showlocationmarker": true,
            "path": "day",
            "north_direction": 0,
            "zoomLevels": 10,
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
            "last_rendertime": 1599425880,
            "base": "",
            "defaultZoom": 1,
            "minZoom": 0,
            "world": "Core01",
            "isOverlay": false,
            "maxZoom": 10,
            "name": "Daytime Render"
        }
    ],
    "worlds": [
        "Core01"
    ]
};
