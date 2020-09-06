var overviewerConfig = {
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "coordsBox": true,
            "spawn": true,
            "mapType": true,
            "zoom": true,
            "compass": true,
            "overlays": true,
            "pan": true
        },
        "debug": true,
        "cacheTag": "1599422486"
    },
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png"
        },
        "UPPERLEFT": 0,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "bgcolor": "#1a1a1a",
            "maxZoom": 10,
            "world": "Core01",
            "north_direction": 0,
            "defaultZoom": 1,
            "minZoom": 0,
            "showlocationmarker": true,
            "path": "day",
            "spawn": [
                80,
                96,
                192
            ],
            "name": "Daytime Render",
            "zoomLevels": 10,
            "last_rendertime": 1599422280,
            "center": [
                80,
                96,
                192
            ],
            "imgextension": "png",
            "poititle": "Markers",
            "base": "",
            "isOverlay": false
        }
    ]
};
